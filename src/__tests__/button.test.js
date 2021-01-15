import Button from '../components/add-todo-button/button.component';

describe('Button class', () => {
  let button;
  beforeEach(() => {
    document.body.innerHTML = '<button type="button" class="d-flex projects" id="add-todo-btn">'
    + '</button>'
    + '<div class="todos" id="todo-form-container">'
    + '</div>';
    button = new Button(document.getElementById('add-todo-btn'), document.getElementById('todo-form-container'));
  });

  it('Should activate button', () => {
    expect(button.activateButton()).toBe('add-todo-btn');
  });
  it('Should click the button', () => {
    button.activateButton();
    const mockCallBack = jest.fn();
    const btn = document.getElementById('add-todo-btn');
    btn.onclick = mockCallBack;
    btn.click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});