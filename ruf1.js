const array = [1, 2, 2, 3, 4, 4, 5];

// Method 1: Using Set
const uniqueWithSet = [...new Set(array)];

// Method 2: Using filter() and indexOf()
const uniqueWithFilter = array.filter((value, index) => array.indexOf(value) === index);

// Method 3: Using reduce()
const uniqueWithReduce = array.reduce((acc, value) => {
    if (!acc.includes(value)) {
        acc.push(value);
    }
    console.log(acc, "Acccc");
    
    return acc;
}, []);

// Method 4: Using forEach()
const uniqueWithForEach = [];
array.forEach(value => {
    if (!uniqueWithForEach.includes(value)) {
        uniqueWithForEach.push(value);
    }
});

// Output results
console.log('Unique with Set:', uniqueWithSet); // [1, 2, 3, 4, 5]
console.log('Unique with filter:', uniqueWithFilter); // [1, 2, 3, 4, 5]
console.log('Unique with reduce:', uniqueWithReduce); // [1, 2, 3, 4, 5]
console.log('Unique with forEach:', uniqueWithForEach); // [1, 2, 3, 4, 5]
