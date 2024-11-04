let a = {};
let b = { key: "b" };
let c = { key: "c" };

console.log(a,b,c);

a[b] = 123;
console.log(a[b]);

a[c] = 456;
console.log(a[c]);

console.log(a[b]);

// code 2

// loop chale ga and usse last mai i ki value 5 milegi 
const arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
