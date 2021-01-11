import './styles/reset.scss';
import './styles/general.scss';

import Project from './components/project/project.component';
import Button from './components/add-todo-button/button.component';
import Aside from './components/aside/aside.component';
import Nav from './components/nav-bar/nav.component';
import Form from './components/todo-form/form.component';


var categoriesArray = [];

const photoImage = document.getElementById('photo');
const menuBtn = document.getElementById('menu-li');
const aisdeContainer = document.getElementById('aside-container');
const createTodoFormBtn = document.getElementById('add-todo-btn');
const formContainer = document.getElementById('todo-form-container');

const form = new Form(formContainer, createTodoFormBtn);
form.getFromData();

const aside = new Aside('kender', aisdeContainer);
aside.putLogo(photoImage);
aside.activateClose();

const navBar = new Nav();
navBar.activateOpenMemu(menuBtn, aisdeContainer)


const button = new Button('kender');
button.sayHello();