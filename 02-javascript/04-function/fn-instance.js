const sum = new Function('n', 'm', 'return n + m;');

const add = function(n, m) {
  return n + m;
}

console.log(sum(1, 2));
console.log(add(1, 2));