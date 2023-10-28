//Exercise
const students = [
  { id: 1, name: "John Lee" },
  { id: 2, name: "adam Smith" },
];
//sorting by id (ascending, descending)
const idSortAsc = students.sort((id1, id2) => {
  return id1.id - id2.id;
});
console.log(idSortAsc);
const idSortDsc = students.sort((id1, id2) => {
  return id2.id - id1.id;
});
console.log(idSortDsc);

//sorting by name (ascending, descending)
const nameSortAsc = students.sort((name1, name2) => {
  name1 = name1.name.toLowerCase();
  name2 = name2.name.toLowerCase();
  if (name1 < name2) return -1; // name1 is placed before name2.
  else if (name1 > name2) return 1; // name1 is placed after name2.
  else return 0; //equal
});
console.log(nameSortAsc);

const nameSortDsc = students.sort((name1, name2) => {
  name1 = name1.name.toLowerCase();
  name2 = name2.name.toLowerCase();
  if (name1 < name2) return 1; // name1 is placed after name2.
  if (name1 > name2) return -1; // name1 is placed before name2.
  return 0; //equal
});
console.log(nameSortDsc);
