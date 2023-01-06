const express = require('express')
const {db} = require("../../db");

const sellers_router = express.Router()

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

//seller_read
sellers_router.get('/read', async (req, res) => {

    try {
       const result = await db.query("select * from Sellers")
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
        //seller otomatik atiyor, warehouseID ekliyor.
        let query = `insert into Sellers  (WarehouseID) values ('${req.body.WarehouseID}')`;
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
        let query = `update Sellers set WarehouseID   = '${req.body.WarehouseID }'
            where sStationerID = '${req.body.sStationerId}'`;
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

