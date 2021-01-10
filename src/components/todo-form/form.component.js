import './form.style.scss';

export default class Form {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`hello ${this.name} using class Form`);
  }
  
}