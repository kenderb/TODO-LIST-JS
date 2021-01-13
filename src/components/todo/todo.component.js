import './todo.style.scss';

export default class Todo {
  constructor(id, project, title, date, description, priority, check = false) {
    this.id = id;
    this.project = project;
    this.title = title;
    this.date = date;
    this.description = description;
    this.priority = priority;
    this.check = check;
  }
}