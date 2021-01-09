import './aside.style.scss';
import logo from '../../images/logo_02.svg';

export default class Aside {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name} using class Aside`);
  }
  putLogo(image){
    image.src = logo;
  }
}