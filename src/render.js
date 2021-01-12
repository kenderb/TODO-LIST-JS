

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
    const projectContainer = document.getElementById('projects');
    projectContainer.innerHTML = '';
    console.log(projectContainer);
    if (projects) {
      for (const project of projects) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML =`
          <p class="gray-color project-number">
            <span id="project-number">${(project.todos).length}</span>  Todos
          </p>
          <b>${project.name} </b>
          <div class="project-color-default">
          </div>`
        projectContainer.append(projectDiv);
      }
    }
    
  }
  
}