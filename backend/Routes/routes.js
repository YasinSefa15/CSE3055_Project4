const express = require('express')
const buyers_router =require('./Modules/buyers.js')
const sellers_router = require('./Modules/sellers.js')
const invoices_router = require('./Modules/invoices.js')
const user_router = require('./Modules/user.js')
const auth_router = require('./Modules/auth.js')
const stationer_router = require('./Modules/stationer')
const items_router = require('./Modules/items')
const address_router = require('./Modules/address')
const order_router = require("./Modules/orders");

const router = express.Router()

const api_routes = router
    .get('/', function () {
    })
    .use('/sellers', sellers_router.routes)
    .use('/auth', auth_router.routes)
    .use('/users', user_router.routes)
    .use('/stationers', stationer_router.routes)
    .use('/buyers',buyers_router.routes)
    .use('/invoices',invoices_router.routes)
    .use('/items',items_router.routes)
    .use('/address',address_router.routes)
    .use('/orders',order_router.routes)



exports.api_routes = api_routes