type NumPair = {
  a: number;
  b: number;
};

type strPair = {
  a: string;
  b: string;
}

function add(x: NumPair): number;
function add(x: strPair): string;
function add(x: NumPair | strPair): number | string {
  let res = Number(x.a) + Number(x.b);
  if (typeof x.a == "number") {
    return res;
  } else {
    return String(res);
  }
}

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: number | string, b: number | string): number | string {
//   let res = Number(a) + Number(b);
//   if (typeof a == "nubmer" && typeof b == "number") {
//     return res;
//   } else if (typeof a == "string" && typeof b == "number") {
//     return String(res);
//   } else {
//     throw new Error("Invalid Arguments");
//   }
// }