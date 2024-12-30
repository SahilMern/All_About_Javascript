// Sum USING Reduce method and return is imp for next itration

const array = [1, 2, 3, 4,11, 2, 3, 5, 6];
let maxValue = array[0]
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
    if(maxValue<array[index]){
        maxValue= array[index]
    }
    
}
console.log(maxValue, "maxValue");

