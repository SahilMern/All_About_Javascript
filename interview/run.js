//! Check if a Number is a Palindrome
// TODO: Check if a given number is a palindrome
const isPalindrome = (number) => {
    const reversedNumber = Number(number.toString().split("").reverse().join(""));
    return reversedNumber === number;
  };
  console.log(isPalindrome(1441));