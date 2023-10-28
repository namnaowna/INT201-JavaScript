// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.
function getFirstValue(arr) {
  return console.log(arr.shift());
}

const arr = [5, 2, 3, 4];
getFirstValue(arr);
getFirstValue([1, 2, 3]);
getFirstValue([80, 5, 100]);
getFirstValue([-500, 0, 50]);
getFirstValue([5, 2, 3]);
getFirstValue([75675, 5, 100]);
getFirstValue([-52320, 0, 50]);
