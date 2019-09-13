const db = require('./db-config.js');
const mappers = require('./mappers');


module.exports = {
    findProjects,
    findResources,
    findTasks,
    addProject,
    addResource,
    addTask,
}


function findProjects() {
    return db('projects').then(project => {
      if (project) {
        return  project.map(p => mappers.projectToBody(p));
      } else {
        return project;
      }
    });;
  }

  function findResources() {
    return db('resources');
  }

  function findTasks() {
    return db('tasks').then(task => {
      if (task) {
        return  task.map(p => mappers.taskToBody(p));
      } else {
        return task;
      }
    });;
  }


function addProject(project) {
    return db('projects')
        .insert(project)
        .then(project => {
          if (project) {
            return  project.map(p => mappers.projectToBody(p));
          } else {
            return project;
          }
        });;
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(task => {
          if (task) {
            return  task.map(p => mappers.taskToBody(p));
          } else {
            return task;
          }
        });;
}
