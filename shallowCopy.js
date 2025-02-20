// Shallow Copy
let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c); // 3 (because the reference is shared)

// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 5;
console.log(original.b.c); // 2 (because the copy is independent)
