const express = require('express');
const {mysqlConnection} = require('../server');
const app = express();
const router = express.Router();
const dotenv = require('dotenv');

const {createMembers, readMembers, readMembersId, updateMembersId, deleteMembersId} = require('../controllers/members');

dotenv.config();

//CRUD

//Create
router.post('/createmembers', createMembers);

//Read All
router.get('/readmembers', readMembers);

//Read seperatelly 
router.get('/readmembers/:id', readMembersId);

//Update
router.post('/updatemembers/:id', updateMembersId);

//Delete
router.delete('/deletemembers/:id', deleteMembersId);

module.exports = router;