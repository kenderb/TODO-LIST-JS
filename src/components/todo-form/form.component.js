import './form.style.scss';
import Todo from '../todo/todo.component';
export default class Form {
  constructor(container, btn) {
    this.container = container;
    this.form = this.container.children[0]
    this.btn = btn;
  }

  static formData(form){
    const project = form.elements.project.value;
    const title = form.elements.title.value;
    const date = form.elements.date.value;
    const description = form.elements.description.value;
    const priority = form.elements.priority.value;
    
    const todo = new Todo(
      project,
      title,
      date,
      description,
      priority
    );
  
    console.log(todo);
    
  }

  getFromData() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      Form.formData(this.form);
    });
  }
  
}