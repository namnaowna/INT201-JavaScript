function findFileExtension(filename) {
  return filename.substring(filename.lastIndexOf(".")); // substring คือคำสั่งกำหนดจำนวนการแสดงผลของข้อมูล
  //lastIndexOf() วิธีการส่งกลับตำแหน่งเกิดขึ้นครั้งล่าสุดของค่าที่ระบุในสตริง
}
findFileExtension("sample.ex.jpeg");

function isImageFileExtension(filename) {
  if (filename === null || filename === undefined) return false; //.png, .jpg, .jpeg, .gif, .svg
  return (
    filename.endsWith(".png") ||
    filename.endsWith(".jpg") ||
    filename.endsWith("jpeg") ||
    filename.endsWith(".gif") ||
    filename.endsWith(".svg")
  );
}
console.log(isImageFileExtension("sample.png"));
console.log(isImageFileExtension("sample.jpg"));
console.log(isImageFileExtension("sample.jpeg"));
console.log(isImageFileExtension("sample.gif"));
console.log(isImageFileExtension("sample.svg"));
console.log(isImageFileExtension(null));
console.log(isImageFileExtension(undefined));
console.log(isImageFileExtension("sample.sve"));
