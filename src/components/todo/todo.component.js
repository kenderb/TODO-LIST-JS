import './todo.style.scss';

export default class Todo {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name} using class Todo`);
  }
}