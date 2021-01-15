import Render from '../render';

describe('Render class', () => {
  let render;
  beforeEach(() => {
    window.localStorage.setItem('todoApp', JSON.stringify([{
      name: 'project name',
      color: 'some color',
      todos: [{ title: 'todo here' }],
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
    expect(render.renderProjects()).toBe('project name');
  });

  it('Should render all to-dos', () => {
    expect(render.renderAllTodos()).toEqual([{ title: 'todo here' }]);
  });
});