import './project.style.scss';

export default class Project {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name} using class Project`);
  }
}