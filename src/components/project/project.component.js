import './project.style.scss';

export default class Project {
  constructor(title, color='default') {
    this.title = title;
    this.color = color;
  }
  sayHello() {
    console.log(`hello ${this.name} using class Project`);
  }
}