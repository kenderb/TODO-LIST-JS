import './form.style.scss';
import Todo from '../todo/todo.component';
import Project from '../project/project.component';
export default class Form {
  constructor(container, btn) {
    this.container = container;
    this.form = this.container.children[1]
    this.btn = btn;
  }

  static renderErrorValidation(){
    const errorContainer = document.getElementById('errors');
    errorContainer.innerHTML = '';
    errorContainer.innerHTML = 'To create a new to-do requires all filed';
    return false;
  }

  static formValidation(data){
    if (!data.title || !data.date || !data.description) {
      return Form.renderErrorValidation();
    }
    return true;
  }

 

  static validateProjectForm(title){
    if (!title) {
      Form.renderErrorValidation();
      return true;
    }
    return false;
  }

  static validateProjectUniquenes(title, errorContainer) {
    const projectListselect = document.getElementById('project-list');
    if (projectListselect.querySelector(`#${title}`)) {
      errorContainer.innerHTML = `The project ${title} already exists.`;
      return false;
    }
    return true;
  }

  static getProjectTitleAndColor(projectForm){
    const errorContainer = document.getElementById('errors');
    const title = projectForm.elements.projectTitle.value;
    errorContainer.innerHTML = '';
    if (Form.validateProjectForm(title)) return false;
    const color = projectForm.elements.color.value;
    if (!Form.validateProjectUniquenes(title, errorContainer)) return false;
    const project =  new Project(title, color);
    return project;
  }
  static closeForm(container) {
    container.classList.toggle('d-none');
  }

  static saveDataToTheLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static getDataforTheLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }
  static addNewProjectToForm(project){
    if (!project) return false;
    const projectFormContainer = document.getElementById('project-form-container');
    const projectListselect = document.getElementById('project-list');
    const option = document.createElement('option');
    option.value = project.title;
    option.id = project.title;
    option.innerHTML = project.title;
    projectListselect.append(option);
    Form.saveDataToTheLocalStorage(project.title, {color: project.color});
    Form.closeForm(projectFormContainer);
    return project;
  }

  static getProjectFormInfo() {
    const projectForm = document.getElementById('project-form');
    const projectFormContainer = document.getElementById('project-form-container');
    projectForm.addEventListener('click', (e) => {
      if (e.target.id === 'btn-create-project') {
        const project = Form.getProjectTitleAndColor(projectForm);
        return Form.addNewProjectToForm(project);
      }

      if (e.target.id === 'cancel-project-button') {
        Form.closeForm(projectFormContainer);
        return false;
      }
    });
  }

  static saveData(form){
    const project = form.elements.project.value
    const projectStorageData = window.localStorage.getItem(project);
    const title = form.elements.title.value;
    const date = form.elements.date.value;
    const description = form.elements.description.value;
    const priority = form.elements.priority.value;
    if (projectStorageData === null) Form.saveDataToTheLocalStorage(project, {color: '#d01de0'})
    const color = Form.getDataforTheLocalStorage(project);
    console.log(color);
    const todo = new Todo(
      color.color,
      project,
      title,
      date,
      description,
      priority
    );
    Form.formValidation(todo);
    return todo;
  }

  getFromData() {
    Form.getProjectFormInfo();
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(Form.saveData(this.form));
      
    });
  }

}