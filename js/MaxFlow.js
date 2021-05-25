import { FlowNetwork } from './FlowNetwork.js';

export function DrongoFlow(shifts, people) {
	// Construct graph
	let flow = new FlowNetwork();
	console.log(shifts);
	console.log(people);
	flow.addVertex('supersource');
	flow.addVertex('supersink');
	people.forEach(person => {
		flow.addVertex(person.name);
		flow.addEdge('supersource', person.name, person.capacity);
	});
	shifts.forEach(shift => {
		flow.addVertex(shift.name);
		flow.addEdge(shift.name, 'supersink', shift.capacity);
		people.forEach(person => {
			const match = person.availability.find(slot => shift.start >= slot.start && shift.end <= slot.end);
			if (match !== undefined) flow.addEdge(person.name, shift.name, 1);
		});
	});
	// Perform max flow (currently Edmonds-Karp)
	let count = 0;
	while (true) {
		const predecessor = bfs(flow);
		if (predecessor === undefined) break;
		let curr = 'supersink';
		while (curr !== 'supersource') {
			flow.incrementFlow(predecessor[curr], curr);
			curr = predecessor[curr];
		}
		count++;
		if (count === 100) {
			console.log('breaking, probs infinite loop');
		}
	}
	// Return results
	return people.map(person => {
		const adj = flow.getAdjacentVertices(person.name);
		return {
			name: person.name,
			allocations: adj.filter(edge => edge.flow > 0).map(edge => {
				console.log(edge);
				const shift = shifts.find(shift => shift.name === edge.id);
				return shift;
			})
		};
	})
}

function bfs(flow) {
	let q = ['supersource'];
	let predecessor = {
		supersource: ''
	}
	while (q.length > 0) {
		const v = q.shift();
		const adj = flow.getAdjacentVertices(v);
		adj.forEach(vertex => {
			if (predecessor[vertex.id] === undefined && vertex.flow < vertex.capacity) {
				predecessor[vertex.id] = v;
				q.push(vertex.id);
			}
		});
	}
	if (predecessor['supersink'] === undefined) return undefined;
	return predecessor;
}