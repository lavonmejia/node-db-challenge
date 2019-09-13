

exports.seed = function(knex, Promise) {

      return knex('resources').insert([
        {id: 1, ResourceName: 'random resource', ResourceDescription: 'Resource to be silly'},
        {id: 2, ResourceName: 'random important resource', ResourceDescription: 'Resource to be important'},
        {id: 3, ResourceName: 'random difficult resource', ResourceDescription: 'Resource to be difficult'}
      ]);
    
};
