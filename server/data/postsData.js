// Camada para interagir com o banco

const database = require('../infra/database')

exports.getPosts = function () {
    return database.query('select * from blog.post')
}