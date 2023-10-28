function isImageFileExtension(fileName) {
  if (fileName === null || fileName === undefined) {
    return false;
  } else if (fileName.includes(".doc") || fileName.includes(".pdf")) {
    return false;
  }
  return true;
}
let file = "sample.jpg";
let file1 = "sample.jpeg";
let file2 = "sample.svg";
let file3 = "sample.png";
let file4 = "sample.gif";
let file5 = "sample.doc";
let file6 = "sample.pdf";
let file7 = null;
let file8;
console.log(isImageFileExtension(file));
console.log(isImageFileExtension(file1));
console.log(isImageFileExtension(file2));
console.log(isImageFileExtension(file3));
console.log(isImageFileExtension(file4));
console.log(isImageFileExtension(file5));
console.log(isImageFileExtension(file6));
console.log(isImageFileExtension(file7));
console.log(isImageFileExtension(file8));

