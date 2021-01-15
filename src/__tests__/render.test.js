import Render from '../render';

describe('Render class', () => {
  let render;
  beforeEach(() => {
    window.localStorage.setItem('todoApp', JSON.stringify([{
      name: 'project name',
      color: 'some color',
      todos: [{ title: 'todo here', id: 1 }],
    }]));
    document.body.innerHTML = '<div class="d-flex projects" id="projects">'
    + '</div>'
    + '<div class="todos" id="all-todos-container">'
    + '</div>';
    render = new Render();
  });

  it('Should return and object', () => {
    expect(typeof render).toBe('object');
  });

  it('Should render all projects', () => {
    expect(render.renderProjects()[0].name).toBe('project name');
  });

  it('Should render all to-dos', () => {
    expect(render.renderAllTodos()[0].todos).toEqual([{ id: 1, title: 'todo here' }]);
  });

  it('Should click the to-dos', () => {
    render.renderAllTodos();
    const mockCallBack = jest.fn();
    const btn = document.getElementById('todo-todohere');
    btn.onclick = mockCallBack;
    btn.click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});