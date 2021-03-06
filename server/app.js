const express    = require('express');
const cors       = require('cors')
const bodyParser = require('body-parser');
const bcrypt     = require('bcrypt');
const dotenv     = require("dotenv");
dotenv.config();

const axios      = require('axios');
const dbServices = require('./dbServices');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.send("HELLO WORLD")
})

app.post('/user/register', async(req, res) => {
    const db       = dbServices.getDbServicesInstance();
    const salt     = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(req.body.password,salt); 

    const username = req.body.username;
    const email    = req.body.email;
    const password = hashPass;
    
    console.log(req.body);
    db.db.query("INSERT INTO user (username, email, password) VALUES (?, ?, ?)", 
    [username, email, password],
    (err, result) => {
        if (err){
            throw(err)
        }else{
            res.send({result, msg: "you ar signed"})
        }

    })
})

app.post('/user/login', (req, res) => {
    const db       = dbServices.getDbServicesInstance();
    const email    = req.body.email;
    const password = req.body.password;

    console.log(req.body);
    db.db.query("SELECT * FROM user WHERE email = ?;", [email],
    (err, result, fields) => {
        if(err) throw err;

        if(result.length > 0 && bcrypt.compare(password, result[0].password)){
            req.body.email = email;
            res.send({result, msg: "you are signing in"})
        }
    })

})




module.exports = app;


