const express = require('express')
const sellers_router = require('./Modules/sellers.js')
const user_router = require('./Modules/user.js')
const auth_router = require('./Modules/auth.js')

const router = express.Router()

const api_routes = router
    .get('/', function () {
    })
    .use('/sellers', sellers_router.routes)
    .use('/auth',auth_router.routes)
    .use('/users',user_router.routes)


exports.api_routes = api_routes