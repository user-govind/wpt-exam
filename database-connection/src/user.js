const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype)

const dbInfo = {
    host: "localhost",
    user: "govind",
    password: "cdac",
    database: "wptexam"
}

const addMess = async (mess) => {

    const connection = mysql.createConnection(dbInfo);

    await connection.connectAsync();

    // console.log("connected");

    const sqlQuery = `insert into message (message) values (?)`;

    await connection.queryAsync(sqlQuery, [ mess.message ])

    await connection.endAsync;
}

const selectMess = async () => {

    const connection = mysql.createConnection(dbInfo);

    await connection.connectAsync();

    console.log("connected");

    let sqlQuery = `select * from message order by mid desc`;

    let list = await connection.queryAsync(sqlQuery)

    // console.log(list)

    await connection.endAsync;

    return list;

}

const messBody = {
    message: "hello"
}

// addMess(messBody);

// selectMess();

module.exports = { addMess, selectMess }