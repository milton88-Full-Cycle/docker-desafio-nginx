const config = require('../config');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
});

class PeopleRepository {
    async insert(name) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO people SET ?', { name }, function (error, results) {
                if (error) {
                    console.error(error)
                    reject();
                } else {
                    resolve(results);
                    console.log(results.insertId);
                }
            });
        });

    }
    async listAll() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM people ', function (error, results) {
                if (error) {
                    console.error(error)
                    reject();
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = new PeopleRepository()
