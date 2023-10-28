function concatArray(arr1, arr2) {
  mergeArr = arr1.concat(arr2);
  return mergeArr.reduce((total, count) => total + count, 0);
}
console.log(concatArray([1, 2, 3, 4], [8, 9]));

const arra1 = [1, 2, 3, 4];
console.log(...arra1);
