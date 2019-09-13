module.exports = {
    intToBoolean,
    booleanToint,
    projectToBody,
    actionToBody,
    taskToBody
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
 function projectToBody(project) {
    const result = {
      ...project,
      completed: intToBoolean(project.ProjectCompleted),
    };
  
    if (project.actions) {
      result.actions = project.actions.map(action => ({
        ...action,
        completed: intToBoolean(action.completed),
      }));
    }
  
    return result;
  }
   
  function actionToBody(action) {
    return {
      ...action,
      completed: intToBoolean(action.completed),
    };
  }


  function taskToBody(project) {
    const result = {
      ...task,
      completed: intToBoolean(task.TaskCompleted),
    };
  
    if (project.actions) {
      result.actions = project.actions.map(action => ({
        ...action,
        completed: intToBoolean(action.completed),
      }));
    }
  
    return result;
  }