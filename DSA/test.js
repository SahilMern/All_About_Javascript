
const reverseString = (string) => {
    let str = "";
    for (let i = 0; i < string.length; i++) {
        // console.log(string[i], "string[i]");
        str = string[i]+str;
        
    }
    console.log(str, "ahahahah");
    return str
}
const reverseWord = (string) => {
    const data = string.split(" ")
    // console.log(data, "data");

    for (const element of data) {
        // console.log(element, "element");
       reverseString(element)
    }
    
}
console.log(reverseWord("john doe"))