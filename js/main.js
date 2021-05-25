import { StepHeader } from './StepHeader.js';
import { ItemList } from './ItemList.js';
import { DrongoButton } from './DrongoButton.js';
import { DrongoFlow } from './MaxFlow.js';

// Make some state here!! And then feed set functions into the components below. Also use the state to control what is rendered
let shifts = [
  'M15A,Monday,15:00,17:00,2',
  'T09A,Tuesday,09:00,11:00,2',
  'T11A,Tuesday,11:00,13:00,2'
];
let people = [
  'Jonah,M1400-1700&&T1100-1800,4',
  'Reede,T0900-1100,2',
  'Joel,T0900-1400,4',
  'Dylan,M1500-1800&&T0900-1800,2',
 ];

 const days = {
   monday: 0,
   tuesday: 1,
   wednesday: 2,
   thursday: 3,
   friday: 4,
   saturday: 5,
   sunday: 6,
   m: 0,
   t: 1,
   w: 2,
   h: 3,
   f: 4,
   s: 5,
   d: 6,
 }

document.addEventListener('DOMContentLoaded', function() {
  // Step Headers
  const stepHeaders = document.querySelectorAll('[role=StepHeader]');
  stepHeaders.forEach(stepHeader => {
    new StepHeader(stepHeader);
  });
  // ItemList
  const itemLists = document.querySelectorAll('[role=ItemList]');
  itemLists.forEach((itemList) => {
    if (itemList.id === 'shifts')
      new ItemList(itemList, shifts);
    else
      new ItemList(itemList, people);
  });
  // Button
  const buttons = document.querySelectorAll('[role=DrongoButton]');
  buttons.forEach(button => {
    new DrongoButton(button, generateRoster);
  });
});

function generateRoster() {
  console.log(shifts);
  console.log(people);
  const roster = DrongoFlow(shifts.map(str => {
    const fields = str.split(',');
    return {
      name: fields[0],
      day: days[fields[1].toLowerCase()],
      start: parseInt(fields[2].substr(0,2))*100+parseInt(fields[2].substr(3,2)),
      end: parseInt(fields[3].substr(0,2))*100+parseInt(fields[3].substr(3,2)),
      capacity: parseInt(fields[4])
    };
  }), people.map(str => {
    const fields = str.split(',');
    return {
      name: fields[0],
      availability: extractAvailability(fields[1]),
      capacity: parseInt(fields[2])
    }
  }));
  console.log(roster);
}

function extractAvailability(str) {
  const slots = str.split('&&');
  let availability = [];
  return slots.map(slot => {
    return {
      day: days[slot[0].toLowerCase()],
      start: parseInt(slot.slice(1).split('-')[0]),
      end: parseInt(slot.slice(1).split('-')[1])
    }
  });
}
