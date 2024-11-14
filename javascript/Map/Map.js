
const obj = {
    name:"sahil",
    10:"This is number key",
    true:"this is boolean"
}

const data = new Map([
    ['name', 'pater'],
    [10, 'this is number key in'],
    [true, 'this is bollan']
])
console.log(obj);
console.log(data.get(10));
data.set("city",55)
console.log(data.keys());
console.log(data.size);
console.log(data.has('age'));  // Output: false
data.delete(true);
console.log(data);
data.clear();
console.log(data);


data.forEach((value, key) =>{
    
})

