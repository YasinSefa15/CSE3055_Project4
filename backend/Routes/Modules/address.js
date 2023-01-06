
const express = require('express')



const address_router = express.Router()


const {db} = require("../../db");

address_router.post('/create',  async (req, res) => {
    try {
        let query = `insert into Address (AddressId) values ('${req.body.AddressID}')`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "yeni address oluşturuldu"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})
address_router.put('/update',  async (req, res) => {
    try {
        let query = `update Address set AddressID  = '${req.body.AddressID}'
            where City = '${req.body.City}'
            where Address ='${req.body.Address}'
            where sName ='${req.body.sName}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "address güncellendi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})

exports.routes = address_router

