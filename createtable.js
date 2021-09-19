// This is a seperate file. I initially used the code below to and run it on the server.js file to
// create the MySQL Database on Workbench  

//Imports
const dotenv = require('dotenv');

const {mysqlConnection} = require('./server');

dotenv.config();

//Create a Database Table
 mysqlConnection.query('CREATE TABLE users(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, startdate VARCHAR(255) NOT NULL, personheight VARCHAR(255) NOT NULL, personweight VARCHAR(255) NOT NULL)', (err, rows) => {
    if (err){
        throw err;
    } else {
        console.log('Data Successfully sent!')
        console.log(rows);
        return;
    }
});

