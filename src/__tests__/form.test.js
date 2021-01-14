import Form from '../components/todo-form/form.component';
import createHtmlForm from '../__mock__/formContainer';

describe('Form class', () => {
  let form;
  beforeEach(() => {
    createHtmlForm();
    const createTodoFormBtn = document.getElementById('add-todo-btn');
    const formContainer = document.getElementById('todo-form-container');
    form = new Form(formContainer, createTodoFormBtn);
  });

  it('Should get the form info', () => {
    expect(form.getFromData()).toBe('project name');
  });

  // it('Should render all to-dos', () => {
  //   expect(render.renderAllTodos()).toEqual([{ title: 'todo here' }]);
  // });
});