// Sum USING Reduce method and return is imp for next itration

const array = [1, 2, 3, 4, 2, 3, 5, 6];
const sum = array.reduce((accu, elem, index) => {
    return accu +elem
}, 0)
console.log(sum, "sum");
