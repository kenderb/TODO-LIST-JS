import './button.style.scss';

export default class Button {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name} using class Button`);
  }
}