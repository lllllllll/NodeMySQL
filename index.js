const ConnDB = require("./conn");
const conn = new ConnDB();

conn
    .select('videos', 'id', 10)
    .then(data => {
        console.log(data)
    });