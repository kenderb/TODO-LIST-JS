import './nav.style.scss';
export default class Navbar {
  constructor() {
  }
  activateOpenMemu(element, openElement) {
    element.addEventListener('click', (e) => {
      openElement.classList.toggle('d-none');
    })
  }
}