function rotate(str) {
  const ressult = [];
  for (let i = 0; i < str.length; i++) {
    const arr = str.split(""); // String to array
    const firstElement = arr.shift();
    const newStr = arr.join(""); // join array to string but not include first element
    str = newStr + firstElement;
    ressult.push(str);
  }
  return ressult;
}

const name1 = "Namnaow";
console.log(rotate(name1));

const hello = "Helo world";
console.log(hello.split(""));
const arrayHello = hello.split("");
console.log(arrayHello.join(""));
