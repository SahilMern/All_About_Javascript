const hof = (functionName, v1 , v2) => {
    return functionName(v1, v2);
}

const addition = (v1, v2) => {
    return v1+v2
}


console.log(hof(addition, 1, 2));
