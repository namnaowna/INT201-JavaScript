//ex1
function compareNumsDsc(a, b) {
  if (a < b) return 1; // a is placed after b.
  if (a > b) return -1; // a is placed before b.
  return 0;
}

function compareNumsAsc(a, b) {
  if (a < b) return -1; // a is placed before b.
  if (a > b) return 1; // a is placed after b.
  return 0;
}
const nums = [100, 25, 3, 70, 8, 10];

nums.sort(compareNumsAsc); // sort in increasing order ascending
// nums.reverse(); // reverse the array
console.log(nums);

nums.sort(compareNumsDsc); // sort in increasing order descending
console.log(nums);

//ex2
function compareYears(lang1, lang2) {
  //Ascending
  if (lang1.year < lang2.year) return -1;
  if (lang1.year > lang2.year) return 1;
  return 0;
}

var langs = [
  { name: "JavaScript", year: 1995 },
  { name: "Python", year: 1991 },
  { name: "Java", year: 1995 },
  { name: "C++", year: 1989 },
];

console.log(langs.sort(compareYears));

// ----------------------------------------------

let fruits = ["Pieapple", "Apple", "Orange", "Banana"];
let num1 = [20, 1, 100, 79, 0, 48, 8];

console.log(fruits.sort());
console.log(num1.sort());

//ex3
const points = [40, 100, 1, 5, 25, 10];
points.sort(function () {
  return 0.5 - Math.random();
});
console.log(points);

//ex4
//sort an array of object by name property value and sort an array of object by views property
const island = [
  { name: "Istanbul", views: 617 },
  { name: "Candy", views: 100 },
  { name: "Choco", views: 2496 },
  { name: "Skypiea", views: 118 },
];

const islandSortName = island.sort((name1, name2) => {
  name1 = name1.name.toLowerCase();
  name2 = name2.name.toLowerCase();
  if (name1 < name2) return -1;
  if (name1 > name2) return 1;
  return 0; //equal
});

console.log(islandSortName);

const islandSortView = island.sort((view1, view2) => {
  view1 = view1.views;
  view2 = view2.views;

  return view1 - view2; //ascending
});

console.log(islandSortView);
