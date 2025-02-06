
const sumOfSquare = (array) => {
  let data = array.reduce((acc, elem, index) => {
    return elem*elem +acc
  }, 0)
  console.log(data, "data");
  
}
sumOfSquare([1, 2, 3, 4]);