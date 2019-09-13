

exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments();

        tbl
        .string('TaskDescription', 128)
        .unique()
        .notNullable();


        tbl
        .string('TaskNotes', 128) 
        
        tbl
        .boolean('TaskCompleted')
        .notNullable()
        .defaultTo(false);

        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE') // if the PK record is deleted
        .onUpdate('CASCADE'); // if the PK value updates


    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};

