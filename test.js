const db = require('./data/db-helpers.js');

db.findProjects()
    .then((data) => {console.log(data)});

db.findResources()
    .then((data) => {console.log(data)});