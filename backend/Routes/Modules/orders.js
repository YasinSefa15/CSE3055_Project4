
const express = require('express')

const order_router = express.Router()

const {db} = require("../../db");


order_router.get('/', async (req, res) => {

    try {
        const result = await db.query("select * from Orders")
        res.status(200).json({
            "message": "tüm siparişler listelendi",
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
        console.log(req.body)
        const AddressID = parseInt(req.body.inputs.AddressID)
        const sStationerID = parseInt(req.body.inputs.sStationerID)
        const InvoiceID = parseInt(req.body.inputs.InvoiceID)
        const bStationerID = parseInt(req.body.inputs.bStationerID)
        let query = `INSERT INTO Orders (AddressID, sStationerID, bStationerID,InvoiceID)
            VALUES ('${AddressID}', '${sStationerID}', '${bStationerID}','${InvoiceID}')`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "yeni sipariş oluşturuldu"
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
            "message": "sipariş güncellendi"
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
            "message": "sipariş silindi"
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

