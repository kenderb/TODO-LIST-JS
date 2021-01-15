import Todo from '../components/todo/todo.component';

describe('Todo class', () => {
  let todo;
  beforeEach(() => {
    todo = new Todo('data');
  });

  it('Should create a to-do object', () => {
    expect(typeof todo).toBe('object');
  });
});