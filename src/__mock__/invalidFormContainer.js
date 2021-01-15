const createInvalidHtmlForm = () => {
  document.body.innerHTML = `<button type="button" class="add-todo-btn" id="add-todo-btn">
    <ion-icon name="add-outline">
  </ion-icon></button>
  <div class="todo-form-container d-none" id="todo-form-container">
    <div class="project-form-container d-none" id="project-form-container">
      <form action="/project" class="project-form" id="project-form">
        <h4>Add a new project</h4>
        <div class="project-input-container">
          <input type="text" placeholder="project title" name="projectTitle" >
        </div>
        <div class="project-input-container">
          <label for="color">Pick a color</label>
          <input type="color" name="color" value="red">
        </div>
        <div>
          <button type="button" id="btn-create-project">Add Project</button>
          <button type="button" id="cancel-project-button">Cancel</button>
        </div>
      </form>
    </div>
    <form id="todo-form">
      <h3 class="form-title">Create a Todo</h3>
      <div class="errors" id="errors"></div>
      
      <div class="form-segment project-segment">
        <label for="project">Select or create a project</label>
        <select id="project-list" name="project">
          <option value="default" id="default" selected>default</option>
        </select>
        <button type="button" id="create-project">New project</button>
      </div>
      
      <div class="form-segment">
        <label for="title">Title</label>
        <input type="text" name="title" value="todo title">
      </div>
      
      <div class="form-segment">
        <label for="date">Date</label>
        <input type="date" name="date" value="2018-12-31">
      </div>
      
      <div class="form-segment">
        <label for="description">Description</label>
        <textarea name="description" id="" cols="23" rows="3"></textarea>
      </div>
      
      <div class="form-segment">
        <label for="priority">Priority</label>
        <select id="priority-list" name="priority">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="form-segment">
        <div>
          <button type="button" id="create-button">Create</button>
          <button type="button" id="cancel-button">Cancel</button>
        </div>
      </div>
      
    </form>
  </div>`;
};

export default createInvalidHtmlForm;