const flatternArray = (...arr) => {
    console.log(arr.flat(Infinity));  // Flattening the array to infinite depth
}

const nestedArray = [1, [2, [3, 4]], 5, [6, [7, 8]]];
flatternArray(nestedArray);  // Pass the nested array here, not the function
