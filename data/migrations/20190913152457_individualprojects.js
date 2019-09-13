
exports.up = function(knex) {
    return knex.schema.createTable('individualprojects', tbl => {
        tbl
          .integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE') // if the PK record is deleted
          .onUpdate('CASCADE'); // if the PK value updates
        tbl
          .integer('resource_id')
          .unsigned()
          .references('id')
          .inTable('resources')
          .onDelete('CASCADE') // if the PK record is deleted
          .onUpdate('CASCADE'); // if the PK value updates
  
        tbl.primary(['project_id', 'resource_id']);
    });
    };


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('individualprojects');
};
