
const express = require('express')

const invoices_router = express.Router()

const {db} = require("../../db");


invoices_router.get('/read',  async (req, res) => {
    try {
        console.log(req.body)
        let query = `Select * from Invoices`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "yeni fatura oluşturuldu",
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
invoices_router.post('/create',  async (req, res) => {
    try {
        console.log(req.body)
        const e_invoice =parseInt(req.body.inputs.e_invoice)
        const TotalPrice = parseInt(req.body.inputs.TotalPrice)
        const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
        let query = `INSERT INTO Invoices (e_invoice,TotalPrice) VALUES ('${e_invoice}','${TotalPrice}')`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "yeni fatura oluşturuldu"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})
invoices_router.delete('/delete',  async (req, res) => {
    try {

        const InvoiceID = parseInt(req.body.InvoiceID)
        let query = `DELETE FROM [Invoices] WHERE InvoiceID = '${InvoiceID}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "fatura silindi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata s",
            "err" : err.message
        })
    }

})

exports.routes = invoices_router