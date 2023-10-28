function ops(n1 = 0, n2 = false, n3 = "unknown") {
  console.log(n1, n2, n3);
}
ops(1, undefined, "umaporn");
ops(undefined, undefined, undefined);

function ops1(n1 = 0, n2, ...n3) {
  //(...n3) rest ใช้ได้แค่กับตัวสุดท้ายเท่านั้น
  // console.log(n1, n2, n3);
  console.log("lenght: ", arguments.length);
  for (const ar of arguments) {
    console.log(ar);
  }
  console.log("arguments[2]:", arguments[2]); //
}
ops1(5, 10, 40, 50);
ops1(5, 10, 40, 50, 100, 200, true);
