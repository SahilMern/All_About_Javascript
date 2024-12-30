let caches = {};
const calculation = (a, b) => {
  console.log(a, b, "In calculation");
  let result = (a + b) * (a + b) * (a + b);
  console.log(result, "Result");
  return result;
};

const memoizAddition = (a, b) => {
  let key = a + ":" + b;
  console.log(key);
  if (!caches[key]) {
    const results = calculation(a, b);
    caches[key] = results;
    console.log(caches[key],caches);
    
    return results;
  } else {
    console.log("Fetching from cache");
    return caches[key];
  }
};

memoizAddition(4, 5); // Should calculate and store in cache
// memoizAddition(4, 5); // Should fetch from cache
