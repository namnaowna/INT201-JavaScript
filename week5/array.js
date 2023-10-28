// 1. create array with literal []
//initial x with empty array
const x = []; //let x use ?. //typeof array is object

console.log(typeof x);

// check empty in array
if (x.length === 0) console.log("empty array");
else console.log("not empty arrary");
console.log(x[0]); //access to the index

//x[index] , add a element by using index
x[0] = 1;
x[1] = 3;
x[2] = 5;
//add a new element in the end of array by using push function
x.push(7);
x.push(9);
console.log(x);
// [ 1, 3 , 5 , 7 , 9 ]

console.log("------");
const y = [1, true, "beginner", 2.5]; //dynamic ,untypes , mixed type | สร้าง array พร้อมให้ค่าเลย
console.log(y); //[1, true, "beginner", 2.5]
console.log(y[0]); //1
console.log(y[y.length - 1]); //2.5
console.log(y.length); //4

//nested with array
console.log("------");
const z = [
  [2, 4, 6],
  [true, false],
  ["a", "b", "c"],
];
console.log(z[0]); //[2, 4, 6]
console.log(z[z.length - 1]); //["a", "b", "c"]

//nested with object
console.log("------");
const m = [
  { produceId: 1, name: "pen", price: 200 },
  { produceId: 2, name: "notebook", price: 100 },
  { produceId: 3, name: "pencil", price: 10 },
];
console.log(m.length); //3
console.log(m[0]); //{ produceId: 1, name: "pen", price: 200 }
console.log(m[m.length - 1]); //{ produceId: 3, name: "pencil", price: 10 }

// Tip
const n = { productId: [1001, 1002, 1003], productPrice: [100, 10, 15] }; //type is object
console.log(n.productId); //property is array
console.log(n.productPrice); //property is array
