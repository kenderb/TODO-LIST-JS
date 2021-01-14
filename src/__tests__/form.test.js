import Form from '../components/todo-form/form.component';

describe('Form class', () => {
  let form;
  beforeEach(() => {
    document.body.innerHTML = '<div class="d-flex projects" id="projects">'
    + '</div>'
    + '<div class="todos" id="all-todos-container">'
    + '</div>';
    form = new Form(formContainer, createTodoFormBtn);
  });

  it('Should get the form info', () => {
    expect(form.getFromData()).toBe('project name');
  });

  // it('Should render all to-dos', () => {
  //   expect(render.renderAllTodos()).toEqual([{ title: 'todo here' }]);
  // });
});