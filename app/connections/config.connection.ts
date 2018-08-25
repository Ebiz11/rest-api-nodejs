import mysql from 'mysql';

var dbbuah = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: "buah",
    port    : 3308
});

 export default {
     dbbuah
}