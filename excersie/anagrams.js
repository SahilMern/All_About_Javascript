//TODO:- In anagrams, the letters must match exactly, but the order of the letters is changed.
const areAnagrams = (word1, word2) => {
  if (word1.length == word2.length) {
    const wordOne = word1.split("").sort().join("");
    const wordtwo = word1.split("").sort().join("");
    return wordOne == wordtwo;
  }else{
    throw new Error("Word length not match")
  }
};

// Example usage
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
