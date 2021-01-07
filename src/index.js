import './styles/reset.scss';
import './styles/general.scss';
import Todo from './components/todo/todo.component';
import Project from './components/project/project.component';
import Button from './components/add-todo-button/button.component';


var categoriesArray = [];

console.log('Hello Todo app this is fun');
const todo = new Todo('kender');
todo.sayHello();
const project = new Project('kender');
project.sayHello();
const button = new Button('kender');
button.sayHello();