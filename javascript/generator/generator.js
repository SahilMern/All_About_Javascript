//TODO: - In JavaScript, a generator is a special type of function that allows you to control the function's execution flow and pause/resume its progress. Generators are defined using the function* syntax and use the yield keyword to pause execution and return intermediate values.

function* simpleGenerator(){
    console.log("generator Function in js");
    yield 20;
    yield 30;
    yield 40;
    yield 50;
}
const SG = simpleGenerator()
console.log(SG.next());
console.log(SG.next());
console.log(SG.next().value);

function* simpleGenerator(){
    console.log("generator Function in js");
}
const SG = simpleGenerator()
console.log(SG.next()); // {value: undefined, done: true}



