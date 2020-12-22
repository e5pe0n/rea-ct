const toArray = <T>(arg1: T, arg2: T): T[] => [arg1, arg2];
console.log(toArray(8, 3));
console.log(toArray('foo', 'bar'));
console.log(toArray(5, 'bar')); // error