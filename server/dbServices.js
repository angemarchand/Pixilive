const mysql = require("mysql");
const dotenv = require("dotenv");



class DbServices {
    static instance = null;

    constructor (){
        dotenv.config();

        const con = mysql.createConnection({
           host    : process.env.DB_HOST,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           database: process.env.DB_DATABASE,

        })
        console.log("hi")
        con.connect((err) => {
            if (err) {
                console.log(err.message)
            }
            console.log('db' + con.state)
        });
        this.db = con;
    }

    static getDbServicesInstance () {
        
        if(!DbServices.instance){
            DbServices.instance = new DbServices();
        }
        return DbServices.instance;
    }
}

module.exports = DbServices;