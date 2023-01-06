const express = require('express')
const buyers_router = require('./Modules/buyers.js')
const sellers_router = require('./Modules/sellers.js')
const address_router = require('./Modules/address.js')
const user_router = require('./Modules/user.js')
const auth_router = require('./Modules/auth.js')
const stationer_router = require('./Modules/stationer')

const router = express.Router()

const api_routes = router
    .get('/', function () {
    })
    .use('/sellers', sellers_router.routes)
    .use('/buyers',buyers_router.routes)
    .use('/address',address_router.routes)
    .use('/auth', auth_router.routes)
    .use('/users', user_router.routes)
    .use('/stationers', stationer_router.routes)


exports.api_routes = api_routes