function reverse(str){
    let res="";
    for(let i=str.length-1; i>=0; i--){
        res+=str[i]
    }
    return res
}
function reverseWord(str){
    let word=str.split(" ");
    for(let i=0; i<word.length; i++){
        word[i]=reverse(word[i])
    }
    return word.join(" ")
}
console.log(reverseWord("john doe"))