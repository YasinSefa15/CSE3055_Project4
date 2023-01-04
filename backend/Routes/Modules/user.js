const express = require('express')

const user_router = express.Router()

user_router.get('/:id', (req, res) => {
    res.status(200).json({
        "message": "User showed"
    })

})

user_router.put('/:id', (req, res) => {

    res.status(201).json({
        "message": "User is updated"
    })
})

exports.routes = user_router