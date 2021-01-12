import './todo.style.scss';

export default class Todo {
  constructor(project, title, date, description, priority) {
    this.project = project;
    this.title = title;
    this.date = date;
    this.description = description;
    this.priority = priority;
  }
  sayHello() {
    console.log(`hello ${this.name} using class Todo`);
  }
}