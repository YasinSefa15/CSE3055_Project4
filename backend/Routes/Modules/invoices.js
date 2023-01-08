
const express = require('express')

const invoices_router = express.Router()

const {db} = require("../../db");

invoices_router.post('/create',  async (req, res) => {
    try {
        let query = `INSERT INTO Invoices (InvoiceID, e_invoice,TotalPrice,created_at)
VALUES ('${req.body.InvoiceID}','${req.body.e_invoice}','${req.body.TotalPrice}','${req.body.created_at}',`;
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
        let query = `DELETE FROM [Invoices] WHERE InvoiceID = '${req.body.InvoiceID}'`;
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