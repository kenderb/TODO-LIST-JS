import Button from '../components/add-todo-button/button.component';

describe('Button class', () => {
  let button;
  beforeEach(() => {
    document.body.innerHTML = '<button type="button" class="d-flex projects" id="add-todo-btn">'
    + '</button>'
    + '<div class="todos" id="all-todos-container">'
    + '</div>';
    button = new Button(document.getElementById('add-todo-btn'), 'container');
  });

  it('Should activate button', () => {
    expect(button.activateButton()).toBe('add-todo-btn');
  });
});