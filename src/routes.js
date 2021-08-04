const express = require("express");
const CompanyController = require("./controllers/CompanyController");
const routes = express.Router();
const RolesController = require('./controllers/RolesController');
const UsersRolesController = require("./controllers/UsersRolesController");
const {role} = require('./models')
//const companyController = new CompanyController(instance);


routes.get('/',(req,res)=>{
    return res.json({hello:'world'})
})

//routes.post('/companies',CompanyController.getCourses);
routes.post('/companies',CompanyController.store);
routes.get('/companies',CompanyController.getAll);
routes.get('/roles',RolesController.getAll);
routes.post('/roles',RolesController.store);
routes.post('/users_roles',UsersRolesController.store);
routes.get('/users_roles',UsersRolesController.getAll);

module.exports = routes; 