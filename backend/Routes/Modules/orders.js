
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
        console.log(req.body)
        console.log("---")
        const OrderID = parseInt(req.body.inputs.OrderID)
        const AddressID = String(req.body.inputs.AddressID)
        const sStationerID =String(req.body.inputs.sStationerID)
        const InvoiceID = String(req.body.inputs.InvoiceID)
        let query = `update Orders set  AddressID ='${AddressID}',sStationerID = '${sStationerID}',
            InvoiceID ='${InvoiceID}' WHERE OrderID  = '${OrderID}'`;
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


order_router.get('/items/:id',  async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        let query = `select * from OrderedItems where OrderID = '${id}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "sipariş silindi",
            "result" : result.recordset
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})


order_router.delete('/items/delete/:id',  async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        let query = `delete from OrderedItems where OrderID = '${id}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "sipariş silindi",
            "result" : result.recordset
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})

order_router.post('/items/:id',  async (req, res) => {
    try {
        const OrderID = parseInt(req.params.id)
        const ItemID = parseInt(req.body.inputs.ItemID)
        const Quantity = parseInt(req.body.inputs.Quantity)
        let query = `INSERT INTO OrderedItems (OrderID,ItemID,Quantity) VALUES ('${OrderID}','${ItemID}','${Quantity}')   `;
        const result = await db.query(query)
        res.status(201).json({
            "message": "sipariş silindi",
            "result" : result.recordset
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})

order_router.put('/items/update/:id',  async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const ItemID = parseInt(req.params.ItemID)
        const Quantity = parseInt(req.params.Quantity)
        let query = `update OrderedItems set Quantity = '${Quantity}', ItemID = '${ItemID}' where OrderID = '${id}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "sipariş silindi",
            "result" : result.recordset
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : "foreign key"
        })
    }

})


exports.routes = order_router

