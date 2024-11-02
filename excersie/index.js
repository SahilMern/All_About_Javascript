//! How to find Dublicate value in array
const dublicateArray = [1, 2, 3, 4, 2, 3, 5, 6];
const duplicates = dublicateArray.filter((item, index) => {
    // console.log(array.indexOf(item) !== index);
    return dublicateArray.indexOf(item) !==index;
})
// console.log(duplicates); //? Output: [2, 3]


//!Sum USING Reduce method and return is imp for next itration
const sumArray = [10, 25, 55, 8];
const sumValue = sumArray.reduce((acc, elem, index) => {
    return acc + elem; // Yeh return important hai, jo next iteration me use hota hai
}, 0); 

//! Max Value In Array
const maxValueInArray = [10, 25, 558, 8];
const maxValue = maxValueInArray.reduce((acc, elem, index) => {
    if(acc<elem){
        return elem;
    }
    return acc;
},maxValueInArray[0])
// console.log(maxValue);

//! Max Value In Array By Logic
const maxValueUsingBrain = maxValueInArray.reduce((accu,currentValue) => {
    return accu>currentValue? accu : currentValue
})
// console.log(maxValueUsingBrain);

const minValueInArray = [10, 25, 55, 8];
const minValueUsingBrain = minValueInArray.reduce((accu, currentValue) => {
    // console.log(accu, "accumulator"); //? Jo value rahegi vo print hote rahegi
    return accu < currentValue ? accu : currentValue; 
});
// console.log(minValueUsingBrain); //? Output: 8

//! Find Second Lagest Value in Array 
const largestValueInArray = [10,55,55,65,88,88]
const firstValue = largestValueInArray.reduce((acc,elem) => {
    return acc>elem? acc : elem
})
console.log(largestValueInArray.indexOf(firstValue), "firstValue");
let index = largestValueInArray.indexOf(firstValue)
largestValueInArray.splice(index, 1)