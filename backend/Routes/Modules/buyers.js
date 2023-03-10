const express = require('express')
//const {db} = require("../../db");

const buyers_router = express.Router()

//seller_read
const {db} = require("../../db");
buyers_router.get('/', async (req, res) => {

    try {
        const result = await db.query("select * from Buyers inner join Stationers on Stationers.StationerID = Buyers.bStationerID inner join Addresses on Addresses.AddressID = Stationers.AddressID")
        res.status(200).json({
            "message": "tüm alıcılar listelendi",
            "result" : result.recordset
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata"
        })
    }

})



buyers_router.post('/create',  async (req, res) => {
    try {
        let query = `INSERT INTO [Buyers] DEFAULT VALUES;`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "yeni satıcı oluşturuldu"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})
buyers_router.put('/update',  async (req, res) => {
    try {
        console.log(req.body)
        const sStationerID = parseInt(req.body.inputs.sStationerID)
        const bStationerID = parseInt(req.body.inputs.bStationerID)
        let query = `update Buyers set bStationerId  = '${bStationerId }'
            where sStationerID = '${sStationerId}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "alıcı güncellendi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})
//DELETE from  Buyers where bStationerId = '${req.body.sStationerId}'}
buyers_router.delete('/delete',  async (req, res) => {
    try {
        const StationerID = parseInt(req.body.bStationerID)
        let query = `DELETE from  Buyers where bStationerId = '${StationerID}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "alıcı silindi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})


exports.routes = buyers_router
