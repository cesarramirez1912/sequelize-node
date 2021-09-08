const express = require("express");
const CompanyController = require("./controllers/CompanyController");
const routes = express.Router();
const RolesController = require('./controllers/RolesController');
const UsersRolesController = require("./controllers/UsersRolesController");
const UsersController = require("./controllers/UsersController");
const SizesController = require("./controllers/SizesController");
const ProductsController = require("./controllers/ProductsController");
const CategoriesController = require("./controllers/CategoriesController");
const SubCategoriesController = require("./controllers/SubCategoriesController");
const CompanySizesController = require("./controllers/CompanySizesController");
const ProductsSubCategoriesController = require("./controllers/ProductsSubCategoriesController");
const ProductsCompaniesController = require("./controllers/ProductsCompaniesController");
const ClientsController = require("./controllers/ClientsController");
const SalesController = require("./controllers/SalesController");


routes.get('/', (req, res) => {
    return res.json({ hello: 'world' })
})

routes.post('/companies', CompanyController.store);
routes.get('/companies', CompanyController.getAll);
routes.post('/users', UsersController.store);
routes.get('/users', UsersController.getAll);
routes.get('/users/:id', UsersController.getById);
routes.get('/roles', RolesController.getAll);
routes.post('/roles', RolesController.store);
routes.post('/users_roles', UsersRolesController.store);
routes.get('/users_roles/user/:id', UsersRolesController.getById);
routes.post('/sizes', SizesController.store);
routes.get('/sizes', SizesController.getAll);
routes.post('/products', ProductsController.store);
routes.get('/products', ProductsController.getAll);
routes.post('/categories', CategoriesController.store);
routes.get('/categories', CategoriesController.getAll);
routes.post('/sub_categories', SubCategoriesController.store);
routes.get('/sub_categories', SubCategoriesController.getAll);
routes.post('/companies_sizes', CompanySizesController.store);
routes.get('/companies_sizes', CompanySizesController.getAll);
routes.post('/products_sub_categories', ProductsSubCategoriesController.store);
routes.get('/products_sub_categories', ProductsSubCategoriesController.getAll);
routes.post('/products_companies', ProductsCompaniesController.store);
routes.get('/products_companies', ProductsCompaniesController.getAll);
routes.get('/products_companies/company/:id', ProductsCompaniesController.getById);
routes.post('/clients', ClientsController.store);
routes.get('/clients', ClientsController.getAll);
routes.post('/sales', SalesController.store);
routes.get('/sales', SalesController.getAll);


module.exports = routes; 