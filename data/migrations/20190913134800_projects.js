
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();

        tbl
        .string('ProjectName', 128)
        .unique()
        .notNullable();


        tbl
        .string('ProjectDescription', 128) 
        .notNullable();

        tbl
        .boolean('ProjectCompleted')
        .notNullable()
        .defaultTo(false);

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};
