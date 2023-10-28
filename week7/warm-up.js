//difficulty level: 7/10
function arrayStat(arr) {
  //min, max, sum, avg
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //max
    if (arr[i] < min) min = arr[i]; //min
    if (arr[i] > max) max = arr[i]; //max
  }
  avg = sum / arr.length;
  return { min: min, max: max, sum: sum, avg: avg }; //return obj
}
console.log(arrayStat([1, 2, 3, 4, 5]));
console.log(arrayStat([2, 4, 6, 8, 10]));

const arr = [1,20,8,4,9]
const findMax = Math.max(...arr) //spread กระจาย | 1 20 8 4 9 
const findMin = Math.min(...arr);
console.log(findMax)
console.log(findMin);
