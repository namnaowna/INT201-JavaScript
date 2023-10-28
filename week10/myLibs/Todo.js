class Todo {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }
  getTodo() {
    return { id: this.id, description: this.description };
  }
  setDescription(newDescription) {
    newDescription = this.description;
  }
}
//commonJS
// module.exports = Todo

//ES Module
export { Todo }; //named export
