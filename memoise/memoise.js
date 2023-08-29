const calculateSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

let memoise = (fn) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("Return cache");
      return cache[n];
    } else {
      console.log("Calculating");
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

let a = [1, 2, 3, 4, 5];
console.time();
console.log(a, calculateSum);
console.timeEnd();

console.time();
console.log(a, calculateSum);
console.timeEnd();
