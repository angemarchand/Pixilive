const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
    host    : process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port    : process.env.PORT

})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});