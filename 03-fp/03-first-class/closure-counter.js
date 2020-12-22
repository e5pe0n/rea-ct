const counter = (count = 0) => (adds = 1) => count += adds;
const inc = counter();
console.log(inc());   // 1
console.log(inc(2));  // 3