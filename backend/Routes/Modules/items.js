const express = require('express')
const {db} = require("../../db");



const items_router = express.Router()

items_router.get('/', async (req, res) => {

    try {
        const result = await db.query("select * from Items")
        res.status(200).json({
            "message": "tüm urunler listelendi",
            "result" : result.recordset
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata"
        })
    }

})
items_router.post('/create',  async (req, res) => {
    try {
        let query = `INSERT INTO Items (ItemCode, ItemName, Brand, MainGroup, SubGroup, Price, Currency)
VALUES ('${req.body.ItemCode}','${req.body.ItemName}','${req.body.Brand}','${req.body.MainGroup}','${req.body.SubGroup}'
,'${req.body.Price}','${req.body.Currency}')`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "yeni urun oluşturuldu"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})
items_router.delete('/delete',  async (req, res) => {
    try {
        // itemid de oalbilir kod da oalbilir
        const ItemID = parseInt(req.body.ItemID)
        let query = `DELETE FROM [Items] WHERE ItemCode = '${req.body.ItemID}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "urun silindi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata s",
            "err" : err.message
        })
    }

})

items_router.put('/update',  async (req, res) => {
    try {
        // only update price and currency
        let query = `update Items set Price  = '${req.body.Price}',Currency  = '${req.body.Currency}'
            where ItemID  = '${req.body.ItemID}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "urun güncellendi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})
items_router.get('/readWarehouse', async (req, res) => {

    try {
        let query = `SELECT * FROM Items i JOIN Warehouses w ON i.ItemID = w.ItemID
           Where w.WarehouseID = '${req.body.WarehouseID}' `;
        const result = await db.query(query)
        res.status(200).json({
            "message": "tüm urunler listelendi",
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
exports.routes = items_router