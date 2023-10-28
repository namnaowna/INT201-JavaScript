class Todo {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }

  getTodo() {
    return `Id: ${this.id} Title:${this.description}`;
  }

  setDescription(newDescription) {
    return (this.description = newDescription);
  }
}
const todos = [];

function addTodo(desc) {
  todos.push(desc);
  return todos;
}

function findTodo(searchId) {
  const founId = todos.find((todo) => todo.id === searchId);
  return founId;
}

function findIndexTodo(searchId) {
  const founindexId = todos.findIndex((todo) => todo.id === searchId);
  return founindexId;
}

function removeTodo(removeId) {
  //??

  return todos;
}

function getTodos() {
  return todos;
}

let id1 = new Todo("028", "Namnaow");
let id2 = new Todo("060", "Ohm");
console.log(id1.getTodo());
console.log(id1.setDescription("Thamonwan"));

addTodo(id1);
console.log(todos);
addTodo(id2);
console.log(todos);

console.log(findTodo("028"));
console.log(findIndexTodo("028"));
