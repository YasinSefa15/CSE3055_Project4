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
sellers_router.get('/', async (req, res) => {

    try {
       const result = await db.query("select * from Stationers")
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

sellers_router.post('/route2deneme',  async (req, res) => {
        res.status(201).json({
            "message": "routre 2 deneme mesaj",
        })

})

exports.routes = sellers_router