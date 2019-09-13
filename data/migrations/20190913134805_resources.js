

exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments();

        tbl
        .string('ResourceName', 128)
        .unique()
        .notNullable();


        tbl
        .string('ResourceDescription', 128) 
        .notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
