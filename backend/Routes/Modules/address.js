
const express = require('express')

const address_router = express.Router()

const {db} = require("../../db");


address_router.get('/read', async (req, res) => {

    try {
        const result = await db.query("select * from Addresses")
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

address_router.post('/create',  async (req, res) => {
    try {
        console.log(req.body)
        const City = parseInt(req.body.inputs.City)
        const Address =parseInt(req.body.inputs.Address)
        const sName = parseInt(req.body.inputs.sName)
        let query = `INSERT INTO Addresses (City, Address, sName)
            VALUES ('${City}', '${Address}', '${sName}')`;
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

address_router.delete('/delete',  async (req, res) => {
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


exports.routes = address_router

