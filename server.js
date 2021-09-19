//Imports
const dotenv = require('dotenv');
const express= require('express');
const mysql = require('mysql');
const cors = require('cors');
const { readdirSync } = require('fs');
//const membersRouter = require('./routes/members');

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();


//Create Connection
const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT
});
module.exports.mysqlConnection = mysqlConnection;

//Connect to Database
mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connected');
    else
        console.log('DB connection failed');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(membersRouter);

readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
