const {mysqlConnection} = require('../server');
const dotenv = require('dotenv');

dotenv.config();

//Create
const createMembers = (req, res) => {
    const { id, name, startdate, personweight, personheight } = req.body;

    if (!id) return res.status(400).send('ID is required.');
    if (!name) return res.status(400).send('Name is required.');
    if (!startdate) return res.status(400).send('Date is required.');
    if (!personweight) return res.status(400).send("Person's weight is required.");
    if (!personheight) return res.status(400).send("Person's height is required.");

    const sqlCreate = 'INSERT INTO members (id, name, startdate, personweight, personheight) VALUES (?,?,?,?,?)';
    mysqlConnection.query(sqlCreate, [id, name, startdate, personweight, personheight], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Sucessfull insert!');
            return res.status(200).send("Sucessfull insert!");
        }
    });
}

module.exports.createMembers = createMembers;

//Read All
const readMembers = (req, res) => {
    mysqlConnection.query('SELECT * FROM members', (err, result) => {
        if (!err) {
            return res.status(200).send(result);
        }else {
            console.log(err);
            return res.status(400).send(err);
        }
    });
}

module.exports.readMembers = readMembers;

//Read seperatelly 
const readMembersId = (req, res) => {
    mysqlConnection.query('SELECT * FROM members WHERE id = ?',[req.params.id],(err, result)=>{
        if (!err) {
            return res.status(200).send(result);
        }else {
            console.log(err);
            return res.status(400).send(err);
        }
    });
}

module.exports.readMembersId = readMembersId;

//Update
const updateMembersId = (req, res) => {
    const { id, name, startdate, personweight, personheight } = req.body;
    const sqlUpdate = 'UPDATE members SET id=?, name=?, startdate=?, personweight=?, personheight=? WHERE id=?'
    mysqlConnection.query( sqlUpdate, [id, name, startdate, personweight, personheight, req.params.id], (err, result) => {
        if (!err) {
            return res.status(200).send('Successfull member update!');
        }else {
            console.log(err);
            return res.status(400).send(err);
        }
    });
}

module.exports.updateMembersId = updateMembersId;

const deleteMembersId = (req, res) => {
    const sqlDelete = 'DELETE FROM members WHERE id=?'
    mysqlConnection.query(sqlDelete, [req.params.id], (err, result) => {
        if (!err) {
            return res.status(200).send('Successfull member delete!');
        }else {
            console.log(err);
            return res.status(400).send(err);
        }
    });
}

module.exports.deleteMembersId = deleteMembersId;