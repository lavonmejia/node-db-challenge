exports.seed = function(knex, Promise) {

      return knex('tasks').insert([
        {id: 1, TaskDescription: 'Going to be silly', TaskNotes:'these are notes a', TaskCompleted: false, project_id: 2 },
        {id: 2, TaskDescription: 'Going to be important', TaskNotes:'these are notes b', TaskCompleted:true, project_id: 2},
        {id: 3, TaskDescription: 'Going to be difficult', TaskNotes:'these are notes c', TaskCompleted: false, project_id: 1}
      ]);
   
};
