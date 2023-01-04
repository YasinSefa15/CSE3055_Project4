const express = require('express')

const auth_router = express.Router()

auth_router.post('/login', (req, res) => {

    res.status(200).json({
        "message": "Login successful"
    })

})

auth_router.post('/register',  async (req, res) => {
   


        res.status(201).json({
            "message": "Register successful",
            "user": savedUser
        })

})

exports.routes = auth_router