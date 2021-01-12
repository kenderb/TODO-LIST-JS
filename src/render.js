

export default class Render {
  
  
  static saveDataToTheLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static getDataforTheLocalStorage(key) {
    const starage = JSON.parse(window.localStorage.getItem(key));
    if (starage === null ||starage === 'null') {
      return [];
    }
    return starage;
  }
  
  renderProjects() {
    const projects = Render.getDataforTheLocalStorage('todoApp');
    for (const project of projects) {
      console.log(`rendering.... Projects: ${project.name} color: ${project.color} Numbers of Todos ${(project.todos).length}`);
    }
    
  }
  
}