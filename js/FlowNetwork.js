// Adjacency list implementation of a flow network (graph)

export class FlowNetwork {
	constructor() {
		this.g = [];
		this.numVertices = 0;
	}

	addVertex(id) {
		this.g.push({
			id: id,
			adjList: []
		});
		this.numVertices++;
	}

	indexToId(index) {
		console.log(index);
		return this.g[index].id;
	}

	removeVertex(id) {
		const index = this.g.findIndex(vertex => vertex.id === id);
		this.g.splice(index, 1);
		this.g.forEach(vertex => {
			vertex.adjList = vertex.adjList.filter(edge => edge.index !== index);
		});
		this.numVertices--;
	}

	addEdge(from, to, capacity) {
		this.g.find(vertex => vertex.id === from).adjList.push({
			index: this.g.findIndex(vertex => vertex.id === to),
			capacity: capacity,
			flow: 0
		});
	}

	removeEdge(from, to) {
		const vertex = this.g.find(vertex => vertex.id === from);
		const index = this.g.findIndex(vertex => vertex.id === to);
		vertex.adjList.splice(vertex.adjList.findIndex(edge.index === index), 1);
	}

	updateFlow(from, to, flow) {
		const index = this.g.findIndex(vertex => vertex.id === to);
		this.g.find(vertex => vertex.id === from).adjList.find(edge => edge.index === index).flow = flow;
	}

	incrementFlow(from, to) {
		const index = this.g.findIndex(vertex => vertex.id === to);
		this.g.find(vertex => vertex.id === from).adjList.find(edge => edge.index === index).flow++;
	}

	getAdjacentVertices(id) {
		return this.g.find(vertex => vertex.id === id).adjList.map(edge => {
			return {
				id: this.g[edge.index].id,
				flow: edge.flow,
				capacity: edge.capacity
			};
		});
	}

	isAdjacent(from, to) {
		const index = this.g.findIndex(vertex => vertex.id === to);
		return this.g.find(vertex => vertex.id === from).adjList.some(edge => edge.index === index);
	}

}