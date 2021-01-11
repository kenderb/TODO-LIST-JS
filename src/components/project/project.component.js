import './project.style.scss';

export default class Project {
  constructor(title, color='default', todoArray = []) {
    this.title = title;
    this.color = color;
    this.todoArray = todoArray
  }

  addNewTodo(todo) {
    this.todoArray.push(todo);
    return this;
  }
}