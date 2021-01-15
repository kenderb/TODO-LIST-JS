import Project from '../components/project/project.component';

describe('Project class', () => {
  let project;
  beforeEach(() => {
    project = new Project('data');
  });

  it('Should create a project object', () => {
    expect(typeof project).toBe('object');
  });
});