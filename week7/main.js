const book = {
  isbn: "123456789",
  title: "introduction to JavaScript",
  aunthor: { firstname: "Adam", lastname: "King" },
  publisher: {
    name: "HarperCollins",
    location: {
      name: "Silicon",
      country: "USA",
    },
  },
};

//destructuring obj | เป็นตัวแปรอิสระจาก book แล้ว
const { title } = book; //equally to const title = book.title
console.log(title);

//store property value to new variable name
const { publisher: publisherName, isbn: isbn_book } = book; //เปลี่ยนชื่อจาก publisher เป็น publisherName
console.log(publisherName);
console.log(isbn_book);

//การหาใน nested obj
const {
  publisher: {
    location: { country },
  },
} = book;
console.log(country);
