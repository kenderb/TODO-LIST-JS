

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
  static eventForClick(todo, todoDiv, project, data){
    const deleteTitleSpaces = (todo.title).replace(/\s/g, '');
    todoDiv.addEventListener('click', (e) => {
      if (e.target.id === `title-${todo.id}` || 
          e.target.id === `date-${todo.id}`  ||
          e.target.id === `container-${todo.id}`) {
        const detailsContainer = document.getElementById(`details-${todo.id}`)
        detailsContainer.classList.toggle('d-none');
      }
      if (e.target.id === `delete-${todo.id}`) {
        const currentTodo = document.getElementById(`container-${todo.id}`);
        const currentDetail = document.getElementById(`details-${todo.id}`);
        const indexOfItem = (project.todos).indexOf(todo);
        if (indexOfItem > -1) {
          (project.todos).splice(indexOfItem, 1);
          currentTodo.remove();
          currentDetail.remove();
          Render.saveDataToTheLocalStorage('todoApp', data);
          location.reload();
        }
      }
    });
  }

  static eventForFocusOut(todoDiv, project, todo, data){
    const deleteTitleSpaces = (todo.title).replace(/\s/g, '');
    todoDiv.addEventListener('focusout', (e) => {
      console.log(e.target.id);
      if (e.target.id === `description-${todo.id}`) {
        todo.description = e.target.innerHTML;
        Render.saveDataToTheLocalStorage('todoApp', data);
      }

      if (e.target.id === `editable-title-${todo.id}`) {
        const titleTag = document.getElementById(`title-${todo.id}`)
        titleTag.innerHTML = e.target.innerHTML;
        todo.title = e.target.innerHTML;
        Render.saveDataToTheLocalStorage('todoApp', data);
      }

      if (e.target.id === `priority-${todo.id}`) {
        todo.priority = e.target.value;
        Render.saveDataToTheLocalStorage('todoApp', data);
        location.reload();
      }
      
      if (e.target.id === `edit-date-${todo.id}`) {
        const dateTag = document.getElementById(`date-${todo.id}`)
        dateTag.innerHTML = `Due date: ${e.target.value}`
        todo.date = e.target.value;
        Render.saveDataToTheLocalStorage('todoApp', data);
      }
    });
  }

  static renderTodoCard(deleteTitleSpaces, project, todo){
    const todoCard =  `
      <div class="todo d-flex" id="container-${todo.id}">
        <div class="checkbox-container"id="check-${todo.id}">
          <input type="checkbox" name="checkbox" id="checkbox" class="checkbox">
          <label for="checkbox" class="checkbox-circle" id="${todo.id}"></label>
        </div>
        <p class="todo-title" id="title-${todo.id}">
          ${todo.title}
        </p>
        <div class="todo-date ml-auto gray-color" id="date-${todo.id}"> Due date: ${todo.date}</div>
        <ion-icon name="trash-outline" class="delete-todo-icon" id="delete-${todo.id}"></ion-icon>
        <div class="priority-color-container priority-color-${todo.priority}" id="color-${todo.id}"></div>
      </div>
      <div class="todo-details d-none" id="details-${todo.id}">
        <div class="edit-container">
          <p class="gray-color">Title</p>
          <p contenteditable="true" id="editable-title-${todo.id}" class="editable-content">${todo.title}</p>
        </div>
        <div class="edit-container">
          <p class="gray-color">Due date:</p>
          <input type="date" value="${todo.date}" id="edit-date-${todo.id}" class="editable-content">
        </div>
        <div class="edit-container">
          <p class="gray-color">Description: </p>
          <p class="editable-content" id="description-${todo.id}">
              ${todo.description}
          </p>
        </div>
        <div class="edit-container">
          <p class="gray-color">Priority: </p>
          <select id="priority-${todo.id}" class="editable-content">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    `;
    return todoCard;
  }
  
  static construcCard(todoContainer, project, todo, data){
    const todoDiv = document.createElement('div');
    const deleteTitleSpaces = (todo.title).replace(/\s/g, '');
    todoDiv.id = `todo-${deleteTitleSpaces}`;
    todoDiv.innerHTML = Render.renderTodoCard(deleteTitleSpaces, project, todo);
    Render.eventForClick(todo, todoDiv, project, data);
    Render.eventForFocusOut(todoDiv, project, todo, data);
    todoContainer.append(todoDiv);
    const getCircle = document.getElementById(`${todo.id}`);
    const editableDescription = document.getElementById(`description-${todo.id}`);
    editableDescription.contentEditable = true;
    getCircle.style.border = `${project.color} 1px solid`;
    
  }

  static renderProjectCard(project, projectContainer, data) {
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
    projectDiv.addEventListener('click', ()=> {
      const todoContainer = document.getElementById('all-todos-container');
      todoContainer.innerHTML = '';
      if (project.todos) {
        for (const todo of project.todos) {
          Render.construcCard(todoContainer, project, todo, data);
        }
      }
    });
  }
  
  renderProjects() {
    const data = Render.getDatafromTheLocalStorage('todoApp');
    const projectContainer = document.getElementById('projects');
    projectContainer.innerHTML = '';
    if (data) {
      for (const project of data) {
        Render.renderProjectCard(project, projectContainer, data)
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
          Render.construcCard(todoContainer, project, todo, data);
        }
      }
    }
  }

  
}