const names = ["alice", "John", "Bob", "Ann"];

//Check all names start with 'A' or 'a'
const isStartWithALetter = names.every(
  //(name) => name.toLowercase().startsWith("a") 
  (name) => name.startsWith("a") || name.startsWith("A") 
);
console.log(isStartWithALetter); //false

//Check at least one names start with 'A' or 'a'
const isSomeStartWithALetter = names.some(
  //(name) => name.toLowercase().startsWith("a") 
  (name) => name.startsWith("a") || name.startsWith("A") 
);
console.log(isSomeStartWithALetter); //true
