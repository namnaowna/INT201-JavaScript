//for Each
const fruits = ["apple", "mango", "orange", "pineapple"];

fruits.forEach((fruits) => console.log(fruits.charAt(0))); // reuturn ตัวแรกของคำ
let allFruits = ''
fruits.forEach((fruits) => (allFruits += fruits + ' '))
console.log(allFruits) 


