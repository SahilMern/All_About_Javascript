const obj = { index: 0, value: 5 };

const keysArray = Object.keys(obj);
console.log(keysArray); // Output: ['index', 'value']

const valuesArray = Object.values(obj);
console.log(valuesArray); // Output: [0, 5]


const entriesArray = Object.entries(obj);
console.log(entriesArray); // Output: [['index', 0], ['value', 5]]
