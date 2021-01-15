import Navbar from '../components/nav-bar/nav.component';

describe('Navbar class', () => {
  let navbar;
  beforeEach(() => {
    document.body.innerHTML = '<nav class="d-flex projects" id="navbar">'
    + '</nav>'
    + '<div class="todos" id="all-todos-container">'
    + '</div>';
    navbar = new Navbar(document.getElementById('navbar'), 'container');
  });

  it('Should activate open menu navbar', () => {
    expect(navbar.activateOpenMemu()).toBe('navbar');
  });
});