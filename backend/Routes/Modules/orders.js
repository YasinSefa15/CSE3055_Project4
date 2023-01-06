
const express = require('express')

const order_router = express.Router()

const {db} = require("../../db");


order_router.get('/', async (req, res) => {

    try {
        const result = await db.query("select * from Orders")
        res.status(200).json({
            "message": "tüm adresler listelendi",
            "result" : result.recordset
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata"
        })
    }

})

order_router.post('/create',  async (req, res) => {
    try {
        let query = `INSERT INTO Addresses (City, Address, sName)
            VALUES ('${req.body.City}', '${req.body.Address}', '${req.body.sName}')`;
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
order_router.put('/update',  async (req, res) => {
    try {
        let query = `update Addresses set  sName ='${req.body.sName}',City = '${req.body.City}',
            Address ='${req.body.Address}' WHERE AddressID  = '${req.body.AddressID}'`;
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

order_router.delete('/delete',  async (req, res) => {
    try {
        let query = `DELETE from  Addresses where AddressID = '${req.body.AddressID}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "address silindi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})


exports.routes = order_router

