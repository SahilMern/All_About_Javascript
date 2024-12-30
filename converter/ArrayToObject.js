// **Approach 1: Using map() to Convert Array to Array of Objects**
const array1 = [5, 8, 9, 8, 5];  // Renamed array to array1
const arrayOfObject1 = array1.map((elem, index) => {
    // Returning an object with the element's index and value
    return { no: index, element: elem };
});
console.log(arrayOfObject1); 
// Expected Output: 
// [{ no: 0, element: 5 }, { no: 1, element: 8 }, { no: 2, element: 9 }, { no: 3, element: 8 }, { no: 4, element: 5 }]

// **Approach 2: Using forEach() to Convert Array to Array of Objects**
const array2 = [5, 8, 9, 8, 5];  // Renamed array to array2
const arrayOfObject2 = [];

// Iterating over the array using forEach to push objects into the result array
array2.forEach((elem, index) => {
    // Pushing an object with index and value into the arrayOfObject
    arrayOfObject2.push({ index: index, value: elem });
});

console.log(arrayOfObject2);
// Expected Output: 
// [{ index: 0, value: 5 }, { index: 1, value: 8 }, { index: 2, value: 9 }, { index: 3, value: 8 }, { index: 4, value: 5 }]
