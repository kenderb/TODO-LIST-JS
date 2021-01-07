import './styles/reset.scss';
import './styles/colors.scss';
import './styles/general.scss';
import Todo from './components/todo/todo.component';

console.log('Hello Todo app this is fun');
const todo = new Todo('kender');
todo.sayHello();