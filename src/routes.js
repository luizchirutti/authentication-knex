const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')
const SupplyerController = require('./controllers/SupplyerController.js')
const ProdforController = require('./controllers/ProdforController')
const ProductController = require('./controllers/ProductController')
const MRPController = require('./controllers/MRPController')


routes.get('/users', UserController.index )
routes.post('/users', UserController.create )
routes.put('/users/:id', UserController.update )
routes.delete('/users/:id', UserController.delete )	
routes.get('/supplyer', SupplyerController.index )
routes.get('/prodfor', ProdforController.index )
routes.get('/product', ProductController.index )
routes.get('/mrp', MRPController.index )










module.exports = routes     
