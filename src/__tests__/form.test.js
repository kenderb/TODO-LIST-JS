import Form from '../components/todo-form/form.component';
import createHtmlForm from '../__mock__/formContainer';
import createInvalidHtmlForm from '../__mock__/invalidFormContainer';

describe('Form class', () => {
  let validForm;
  let invalidForm;
  it('Should get the form info', () => {
    createHtmlForm();
    const createTodoFormBtn = document.getElementById('add-todo-btn');
    const formContainer = document.getElementById('todo-form-container');
    validForm = new Form(formContainer, createTodoFormBtn);
    expect((validForm.getFromData())(validForm.form)).toBe(true);
  });

  it('Should return false if there is no info', () => {
    createInvalidHtmlForm();
    const createTodoFormBtn = document.getElementById('add-todo-btn');
    const formContainer = document.getElementById('todo-form-container');
    invalidForm = new Form(formContainer, createTodoFormBtn);
    expect((invalidForm.getFromData())(invalidForm.form)).toBe(false);
  });
});