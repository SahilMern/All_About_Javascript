const num = 5 + "5" - 5;
console.log(num, typeof num, "Question 1");
//My answer 50 and number and   //? is Right

// ---------------QUESTION 2---------------- //
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  //   setTimeout(() => console.log(b[i]), 1000);
}
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    // console.log(b[10]);
  }, 1000);
}
//TODO:- isme undefined aayega kyu jab hum SETTIMEOUT USE KARTE HAI WITH VAR to ye ek value print karti hai or isme last value ko get karti hai lekin array jo 0 se start hoti 9 isme value 10 aa rahi hai

// Code 1
// ---------------------PENDING ---------------------
let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel;
  },
};
let getPower = hero.getPower; //asign kar rahe hai THIS ki value no longer use ho jayegi
// console.log(getPower(), "uss");

let hero2 = { powerLevel: 42 };
// console.log(getPower.apply(hero2));
