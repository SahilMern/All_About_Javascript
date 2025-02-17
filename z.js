// "use strict";
const cache = {};
const memorizationFunction = (a, b) => {
  return a + b;
};

const userinput = (a, b) => {
  let key = a + ":" + b;
  if (!cache[key]) {
    const dataValue = memorizationFunction(a, b);
    cache[key] = dataValue;
    console.log(cache, "cache");
  } else {
    console.log("hello");
    console.log(cache[key]);
    
  }
};

// userinput(3, 5);
// userinput(4, 5);


const curryingFunction = (a) => {
  return (b) => {
    return (c)=>{
      console.log(a +b+ c);
    }
  }
}
// curryingFunction(5)(6)(1)

(() => {
  console.log("IIFE");
})()


const sum = (a, b) => {
  console.log(a+b , "Final answer in Sum");
  return a+b
}

const min = (a, b) => {
  console.log(a-b , "Final answer in Sum");
  return a-b
}

const Hof = (a,b,callbackFunction) => {
  callbackFunction(a, b)
}

// Hof(4,5,sum)
// Hof(4,5,min)


const fatArrowFunction = (a,b) => console.log(a+b, "a+b");
// fatArrowFunction(10,10)