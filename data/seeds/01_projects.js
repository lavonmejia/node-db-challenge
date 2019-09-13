
exports.seed = function(knex, Promise) {
        return knex('projects').insert([
        {id: 1, ProjectName: 'random silly project', ProjectDescription: 'Going to be silly', ProjectCompleted: false },
        {id: 2, ProjectName: 'random important project', ProjectDescription: 'Going to be important', ProjectCompleted:true},
        {id: 3, ProjectName: 'random difficult project', ProjectDescription: 'Going to be difficult', ProjectCompleted: false}
      ]);
  
};
