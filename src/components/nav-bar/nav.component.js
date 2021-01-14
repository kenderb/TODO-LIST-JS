import './nav.style.scss';

export default class Navbar {
  constructor(element, openElement) {
    this.element = element;
    this.openElement = openElement;
  }

  activateOpenMemu() {
    this.element.addEventListener('click', () => {
      this.openElement.classList.toggle('d-none');
    });
    return this.element.id;
  }
}