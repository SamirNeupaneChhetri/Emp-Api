const express = require('express');
const routes = express.Router();
const {GetAlluser, addNewEmp, getEmp, DeleteEmp} = require('../controllers/conroller')

routes.get('/', GetAlluser);
routes.post('/',addNewEmp);
routes.get('/:id', getEmp);
routes.delete('/:id', DeleteEmp);

module.exports = routes;