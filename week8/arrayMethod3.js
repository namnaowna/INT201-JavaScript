//--- reduce() ---
const nums = [5, 2, 3, 4, 7];
const total = nums.reduce((sum, num) => sum + num, 0);
console.log(total);

//return total of all nums
const totalmulti = nums.reduce((sum, num) => sum * num, 1);
console.log(totalmulti);

//return value that contain the first character of all names
const names = ["Alice", "Bob", "Ann", "Cath"]; //'ABAC'
const nameStartWith = names.reduce(
  (concat, char) => concat + char.charAt(0),
  ""
);
console.log(nameStartWith);

//return the total price
const buyProducts = [
  { price: 50, quantity: 2 },
  { price: 299, quantity: 10 },
  { price: 15, quantity: 5 },
];
const sumBuyProducts = buyProducts.reduce(
  (total, current) => total + current.price * current.quantity,
  0
);

console.log(sumBuyProducts);

//--- sprice() ---
const number = [10, 3, 75, 1, 30, 100];
//1. splice to remove 75 , 1 ,30
const removeElement = number.splice(2, 3); //splice( startIndex,the number of delete elements)
console.log(removeElement); //[ 75, 1, 30 ]
console.log(number); //[ 10, 3, 100 ]

//2. splice to add three new elements at index 3, return empty array
const addEles = number.splice(2, 0, 111, 555, 888);
console.log(addEles); //[]
console.log(number); // [10, 3, 111, 555, 888, 100];

//3.splice to replace at index 1 with [200,400]
const replaceEles = number.splice(1, 2, 200, 400);
console.log(replaceEles); //[ 3, 111 ]
console.log(number); //[ 10, 200, 400, 555, 888, 100 ]

//Exercise
//replace negative number to zero
const number1 = [-5, -6, 7, 8, 9, -1, 0];
const replaceNum1 = number1.map((number) => {
  return number < 0 ? 0 : number;
});
console.log(replaceNum1);

// --- reverse() ---
console.log("before", number1);
number1.reverse();
console.log("After", number1); //After [0, -1,  9, 8, 7, -6, -5]

//includes() for String case sensitive
const msg = "Today is a present";
console.log(msg.includes("Re")); //false
console.log(msg.includes("re")); //true
console.log(msg.includes("day")); //true
console.log(msg.includes("present")); //true

//includes() for Array case sensitive
const newMsg = msg.split(" ");
console.log(newMsg); //[ 'Today', 'is', 'a', 'present' ]
console.log(newMsg.includes("re")); //false
console.log(newMsg.includes("day")); //false
console.log(newMsg.includes("today")); //false
console.log(newMsg.includes("Today")); //true

// --- join() ---
//const number1 = [0, -1,  9, 8, 7, -6, -5];
const number1String = number1.join("*");
console.log(number1String);

// --- sort() ----
console.log(number1.sort()); //defalut sorting by string
number1.sort((num1, num2) => num1 - num2); //ascending
console.log(number1);
number1.sort((num1, num2) => num2 - num1); //descending
console.log(number1);

//Exercise
const students = [
  { id: 1, name: "John Lee" },
  { id: 2, name: "adam Smith" },
  { id: 3, name: "Adam Smith" },
  { id: 50, name: "Ann Smith" },
];
//sorting by id (ascending, descending)
const idSortAsc = students.sort((id1, id2) => {
  id1 = id1.id;
  id2 = id2.id;
  return id1 - id2;
});
console.log(idSortAsc);
const idSortDsc = students.sort((id1, id2) => {
  id1 = id1.id;
  id2 = id2.id;
  return id2 - id1;
});
console.log(idSortDsc);

//sorting by name (ascending, descending)
// console.log(students.sort( (student1,student2) => student1.name.localeCompare(student2.name)))
const nameSortAsc = students.sort((name1, name2) => {
  name1 = name1.name.toLowerCase();
  name2 = name2.name.toLowerCase();
  if (name1 > name2) return 1;
  else if (name1 < name2) return -1;
  else return 0;
});
console.log(nameSortAsc);

//console.log(students.sort( (student1,student2) => student2.name.localeCompare(student1.name)))
const nameSortDsc = students.sort((name1, name2) => {
  name1 = name1.name.toLowerCase();
  name2 = name2.name.toLowerCase();
  if (name1 > name2) return -1;
  else if (name1 < name2) return 1;
  else return 0;
});
console.log(nameSortDsc);
