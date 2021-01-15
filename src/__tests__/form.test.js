import Form from '../components/todo-form/form.component';
import createHtmlForm from '../__mock__/formContainer';
import createInvalidHtmlForm from '../__mock__/invalidFormContainer';

describe('Form class', () => {
  let validForm;
  let invalidForm;

  it('Should get the form info', () => {
    window.localStorage.setItem('todoApp', JSON.stringify([{
      name: 'default',
      color: 'some color',
      todos: [{ title: 'todo here', id: 1 }],
    }]));
    createHtmlForm();
    const createTodoFormBtn = document.getElementById('add-todo-btn');
    const formContainer = document.getElementById('todo-form-container');
    validForm = new Form(formContainer, createTodoFormBtn);
    expect((validForm.getFromData())(validForm.form)).toBe(true);
  });

  it('Should return false if there is no info', () => {
    window.localStorage.setItem('todoApp', JSON.stringify([{
      name: 'Just name',
      color: 'some color',
      todos: [{ title: 'todo here', id: 1 }],
    }]));
    createInvalidHtmlForm();
    const createTodoFormBtn = document.getElementById('add-todo-btn');
    const formContainer = document.getElementById('todo-form-container');
    invalidForm = new Form(formContainer, createTodoFormBtn);
    expect((invalidForm.getFromData())(invalidForm.form)).toBe(false);
  });

  it('Should click on create project', () => {
    createHtmlForm();
    const createTodoFormBtn = document.getElementById('add-todo-btn');
    const formContainer = document.getElementById('todo-form-container');
    validForm = new Form(formContainer, createTodoFormBtn);
    validForm.getFromData();
    const mockCallBack = jest.fn();
    const createProjectBtn = document.getElementById('btn-create-project');
    createProjectBtn.onclick = mockCallBack;
    createProjectBtn.click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('Should Validate the project title', () => {
    createInvalidHtmlForm();
    const createTodoFormBtn = document.getElementById('add-todo-btn');
    const formContainer = document.getElementById('todo-form-container');
    validForm = new Form(formContainer, createTodoFormBtn);
    validForm.getFromData();
    const mockCallBack = jest.fn();
    const createProjectBtn = document.getElementById('btn-create-project');
    createProjectBtn.onclick = mockCallBack;
    createProjectBtn.click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('Should cancel the project creation', () => {
    createInvalidHtmlForm();
    const createTodoFormBtn = document.getElementById('add-todo-btn');
    const formContainer = document.getElementById('todo-form-container');
    validForm = new Form(formContainer, createTodoFormBtn);
    validForm.getFromData();
    const mockCallBack = jest.fn();
    const cancelProjectBtn = document.getElementById('cancel-project-button');
    cancelProjectBtn.onclick = mockCallBack;
    cancelProjectBtn.click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  
  it('Should click form buttons', () => {
    createInvalidHtmlForm();
    const createTodoFormBtn = document.getElementById('add-todo-btn');
    const formContainer = document.getElementById('todo-form-container');
    validForm = new Form(formContainer, createTodoFormBtn);
    validForm.getFromData();
    const mockCallBack = jest.fn();
    const createButton = document.getElementById('create-button');
    createButton.onclick = mockCallBack;
    createButton.click();
    const createProject = document.getElementById('create-project');
    createProject.onclick = mockCallBack;
    createProject.click();
    const cancelButton = document.getElementById('cancel-button');
    cancelButton.onclick = mockCallBack;
    cancelButton.click();
    expect(mockCallBack.mock.calls.length).toEqual(3);
  });
});