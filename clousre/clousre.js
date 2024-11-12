
const adder = (num) => {
    console.log(num, "num");
    const addAnyNumber = (b) => {
        console.log(num+b);
        
    }
    return addAnyNumber;
    
}
const addTo5 = adder(5)
console.log(addTo5);
