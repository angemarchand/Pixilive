const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const axios = require('axios');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// CREATE TABLE user (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, username VARCHAR(255), email VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255));

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'pixilive'

})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

app.get('/', function (req, res) {
    res.send("HELLO WORLD")
})

app.post('/user/register', function (req, res) {
    // const {username, email, password} = req.body
    
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
    console.log(req.body);
    db.query("INSERT INTO user (username, email, password) VALUES(?, ?, ?)", 
    [username, email, password],
    (err, result) => {
        if (err) {
            console.log(err, "this email is already in use")
            res.status(400).send({error: "Sign up failed"})
        }
    
        res.send({result, msg: "you ar signed"})

    })
})

app.post('/user/login', function (req, res) {
    db.query('INSERT INTO user VALUES (?, ?, ?)', [],
         (err, result) => {
             
         });
    res.send("HELLO WORLD")
})




module.exports = app;

