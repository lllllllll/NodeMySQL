const mysql = require("mysql");

const conn = mysql.createConnection({
    user: "root", 
    password: "root", 
    host: "localhost", 
    port: 3306,
    database: "pictures"
});

conn.query(`SELECT * FROM aaa`, (err, result) => {
    if (err) {
        return reject(err);
    }

    console.log('Result >>> ', result);
})