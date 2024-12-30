const array = [1, 2, 9, 4, 11, 2, 3, 6, 5, 0, 2];

// Bubble Sort Algorithm
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - 1; j++) { // Fixing index out of bounds
    if (array[j] < array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array, "sorted array");

// Find the largest and second largest distinct value
let largest = array[0];
let secondLargest = null;

for (let i = 1; i < array.length; i++) {
  if (array[i] < largest) {
    secondLargest = array[i];
    break;
  }
}

console.log("Second largest distinct value:", secondLargest);
