const mysql = require("mysql");
const Promise = require("promise");

module.exports = class ConnDB {
    constructor() {
        this.conn = mysql.createConnection({
            user: "root", 
            password: "admin", 
            host: "localhost", 
            port: 3306,
            database: "pictures"});
    }

    select(table, orderBy, limit) {
        console.log(1111);
        return new Promise(function (resolve, reject) {
            this
                .conn
                .query(`SELECT * FROM ${table} ORDER BY ${orderBy} LIMIT ${limit}`, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    console.log('Result >>> ', result);

                    resolve(result);
                })
        })
    }
};