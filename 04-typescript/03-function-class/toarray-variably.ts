const toArrayVariably = <T>(...args: T[]): T[] => [...args];
console.log(toArrayVariably(1, 2, 3, 4, 5));