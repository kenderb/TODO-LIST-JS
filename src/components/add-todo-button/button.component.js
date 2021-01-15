import './button.style.scss';

export default class Button {
  constructor() {
    this.openBtn = document.getElementById('add-todo-btn');
    this.formContainer = document.getElementById('todo-form-container');
  }

  activateButton() {
    this.openBtn.addEventListener('click', () => {
      this.formContainer.classList.toggle('d-none');
      return true;
    });
    return this.openBtn.id;
  }
}