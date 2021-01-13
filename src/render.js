

export default class Render {
  static saveDataToTheLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static getDatafromTheLocalStorage(key) {
    const starage = JSON.parse(window.localStorage.getItem(key));
    if (starage === null ||starage === 'null') {
      return [];
    }
    return starage;
  }
  
  static renderProjectCard(project, projectContainer) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML =`
    <p class="gray-color project-number">
      <span id="project-number">${(project.todos).length}</span>  Todos
    </p>
    <b>${project.name} </b>
    <div class="project-color-default" id="${project.name}-color">
    </div>`;
    projectContainer.append(projectDiv);
    const colorContainer = document.getElementById(`${project.name}-color`);
    colorContainer.style.backgroundColor = project.color;
  }
  
  renderProjects() {
    const projects = Render.getDatafromTheLocalStorage('todoApp');
    const projectContainer = document.getElementById('projects');
    projectContainer.innerHTML = '';
    if (projects) {
      for (const project of projects) {
        Render.renderProjectCard(project, projectContainer)
      }
    }
  }
  
  renderAllTodos() {
    const data = Render.getDatafromTheLocalStorage('todoApp');
    const todoContainer = document.getElementById('all-todos-container');
    todoContainer.innerHTML = ''
    if (data) {
      for (const project of data) {
        for (const todo of project.todos) {
          const todoDiv = document.createElement('div');
          const deleteTitleSpaces = (todo.title).replace(/\s/g, '');
          todoDiv.id = `todo-${deleteTitleSpaces}`;
          todoDiv.innerHTML = `
            <div class=" todo d-flex" id="container-${deleteTitleSpaces}-${project.name}">
              <div class="checkbox-container"id="check-${deleteTitleSpaces}-${project.name}">
                <input type="checkbox" name="checkbox" id="checkbox" class="checkbox" checked="checked">
                <label for="checkbox" class="checkbox-circle" id="${deleteTitleSpaces}-${project.name}"></label>
              </div>
              <p class="todo-title" id="title-${deleteTitleSpaces}-${project.name}">
                ${todo.title}
              </p>
              <div class="todo-date ml-auto gray-color" id="date-${deleteTitleSpaces}-${project.name}"> Due date: ${todo.date}</div>
              <ion-icon name="trash-outline" class="delete-todo-icon" id="delete-${deleteTitleSpaces}-${project.name}"></ion-icon>
              <div class="priority-color-container priority-color-${todo.priority}"></div>
            </div>
            <div class="todo-details d-none" id="details-${deleteTitleSpaces}-${project.name}">
              <h4 contenteditable="true" id="editable-title-${deleteTitleSpaces}-${project.name}">${todo.title}</h4> <br/>
              <span>Due date:</span><input type="date" value="${todo.date}" id="edit-date-${deleteTitleSpaces}-${project.name}">
              <p>Description: </p>
              <p class="todo-description" id="description-${deleteTitleSpaces}-${project.name}">
                  ${todo.description}
              </p> <br/>
              <p>Priority: </p>
              <select id="priority-${deleteTitleSpaces}-${project.name}" name="priority">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          `;
          todoDiv.addEventListener('click', (e) => {
            console.log(e.target.id);
            if (e.target.id === `title-${deleteTitleSpaces}-${project.name}` || 
                e.target.id === `date-${deleteTitleSpaces}-${project.name}`  ||
                e.target.id === `container-${deleteTitleSpaces}-${project.name}`) {
              const detailsContainer = document.getElementById(`details-${deleteTitleSpaces}-${project.name}`)
              detailsContainer.classList.toggle('d-none');
            }
            if (e.target.id === `delete-${deleteTitleSpaces}-${project.name}`) {
              const currentTodo = document.getElementById(`container-${deleteTitleSpaces}-${project.name}`);
              const indexOfItem = (project.todos).indexOf(todo);
              if (indexOfItem > -1) {
                (project.todos).splice(indexOfItem, 1);
                currentTodo.remove();
                Render.saveDataToTheLocalStorage('todoApp', data);
                location.reload();
              }
            }
          });
          todoDiv.addEventListener('focusout', (e) => {
            console.log(e.target.id);
            if (e.target.id === `description-${deleteTitleSpaces}-${project.name}`) {
              todo.description = e.target.innerHTML;
              Render.saveDataToTheLocalStorage('todoApp', data);
            }

            if (e.target.id === `editable-title-${deleteTitleSpaces}-${project.name}`) {
              todo.title = e.target.innerHTML;
              Render.saveDataToTheLocalStorage('todoApp', data);
              location.reload();
            }

            if (e.target.id === `priority-${deleteTitleSpaces}-${project.name}`) {
              console.log(e.target.value);
              todo.priority = e.target.value;
              Render.saveDataToTheLocalStorage('todoApp', data);
              location.reload();
            }
            
            if (e.target.id === `edit-date-${deleteTitleSpaces}-${project.name}`) {
              todo.date = e.target.value;
              Render.saveDataToTheLocalStorage('todoApp', data);
              location.reload();
            }
          });

          todoContainer.append(todoDiv);
          const getCircle = document.getElementById(`${deleteTitleSpaces}-${project.name}`);
          const editableDescription = document.getElementById(`description-${deleteTitleSpaces}-${project.name}`);
          editableDescription.contentEditable = true;
          getCircle.style.border = `${project.color} 1px solid`;
        }
      }
    }
  }

  
}