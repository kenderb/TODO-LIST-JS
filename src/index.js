import './styles/reset.scss';
import './styles/general.scss';
import Todo from './components/todo/todo.component';
import Project from './components/project/project.component';
import Button from './components/add-todo-button/button.component';
import Aside from './components/aside/aside.component';
import Nav from './components/nav-bar/nav.component';


var categoriesArray = [];

const photoImage = document.getElementById('photo');
const menuBtn = document.getElementById('menu-li');
const aisdeContainer = document.getElementById('aside-container');

const aside = new Aside('kender', aisdeContainer);
aside.putLogo(photoImage);
aside.activateClose();

const navBar = new Nav();
navBar.activateOpenMemu(menuBtn, aisdeContainer)

const todo = new Todo('kender');
todo.sayHello();

const project = new Project('kender');
project.sayHello();

const button = new Button('kender');
button.sayHello();