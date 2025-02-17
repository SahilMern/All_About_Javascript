//LastindexOF
var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];
console.log(myFriendNames.lastIndexOf("thapa")); 
console.log(myFriendNames.includes("bahadur"));


const arrayForFind = [4,8,5,0,9]
const findMethod = arrayForFind.find((elem, index) => {
    return elem>0
})
// console.log(findMethod, "Final output For arrayForFind");

const arrayForFilter = [4,8,5,0,9]
let FilterMethod = arrayForFilter.filter((elemnt) =>{
    return elemnt>5
})
// console.log(FilterMethod, "FilterMethod");

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (number) => number % 2 === 0;
// Use filter to get only even numbers
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // Output: [2, 4, 6]
