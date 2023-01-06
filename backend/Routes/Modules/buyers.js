const express = require('express')
//const {db} = require("../../db");

const buyers_router = express.Router()

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
const {db} = require("../../db");
buyers_router.get('/read', async (req, res) => {

    try {
        const result = await db.query("select * from Buyers")
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
        let query = `insert into Buyers (bStationerId) values ('${req.body.bStationerId}')`;
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
        let query = `update Buyers set bStationerId  = '${req.body.bStationerId }'
            where sStationerID = '${req.body.sStationerId}'`;
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
buyers_router.delete('/delete',  async (req, res) => {
    try {
        let query = `DELETE from  Buyers where bStationerID = '${req.body.bStationerId}'`;
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