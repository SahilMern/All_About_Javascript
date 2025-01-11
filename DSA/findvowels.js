const findVowels = (str) => {
  const userInput = str.toLowerCase().trim();
  const vowelWord = "aeiou";
  let vowelsInWord = [];
  for (let char of userInput) {
    if (vowelWord.includes(char)) {
      vowelsInWord.push(char);
    }
  }
  return vowelsInWord;
  
};
console.log(findVowels("sahil yadav"));

// TODO  :- ISKO DEKH LO
// const str2 = "sahilyadav"
// console.log(str2[5]);
