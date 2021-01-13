import './todo.style.scss';

export default class Todo {
  constructor(project, title, date, description, priority, check = false) {
    this.project = project;
    this.title = title;
    this.date = date;
    this.description = description;
    this.priority = priority;
    this.check = check;
  }
  
}