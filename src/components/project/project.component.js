import './project.style.scss';

export default class Project {
  constructor(title='default', color='#d01de0', todoArray=[]) {
    this.title = title;
    this.color = color;
    this.todoArray = todoArray;
  }
  
  
  addNewTodo(todo) {
    this.todoArray.push(todo);
    return this;
  }
  
}