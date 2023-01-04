const express = require('express')

const sellers_router = express.Router()

sellers_router.post('/route1', (req, res) => {

    res.status(200).json({
        "message": "mesaj"
    })

})

sellers_router.post('/route2deneme',  async (req, res) => {
   


        res.status(201).json({
            "message": "routre 2 deneme mesaj",
        })

})

exports.routes = sellers_router