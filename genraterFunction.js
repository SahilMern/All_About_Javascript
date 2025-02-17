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