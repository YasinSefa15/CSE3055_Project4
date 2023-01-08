const express = require('express')
const {db} = require("../../db");

const sellers_router = express.Router()

//seller_read
sellers_router.get('/', async (req, res) => {

    try {
       const result = await db.query("select * from Sellers inner join Stationers on Stationers.StationerID = Sellers.sStationerID inner join Addresses on Addresses.AddressID = Stationers.AddressID")
        res.status(200).json({
            "message": "tüm satıcılar listelendi",
            "result" : result.recordset
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata"
        })
    }

})

sellers_router.post('/create',  async (req, res) => {
    try {
        console.log(req.body)

        const WarehouseID = parseInt(req.body.inputs.WarehouseID)
        //seller otomatik atiyor, warehouseID ekliyor.
        let query = `insert into Sellers  (WarehouseID) values ('${WarehouseID}')`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "yeni seller oluşturuldu"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})

sellers_router.put('/update',  async (req, res) => {
    try {
        // sStationerId'nin warehousunu guncelliyor
        console.log(req.body)
        const WarehouseID = parseInt(req.body.inputs.WarehouseID)
        const sStationerID = parseInt(req.body.inputs.sStationerID)
        let query = `update Sellers set WarehouseID   = '${WarehouseID }'
            where sStationerID = '${sStationerId}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "satıcı güncellendi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})
sellers_router.delete('/delete',  async (req, res) => {
    try {
        let query = `DELETE from  Sellers where sStationerID = '${req.body.sStationerId}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "satıcı silindi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})



exports.routes = sellers_router

