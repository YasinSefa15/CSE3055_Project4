const express = require('express')
const {db} = require("../../db");


const stationer_router = express.Router()

stationer_router.get('/', async (req, res) => {

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

//insert yapılacaksa post olmalı
stationer_router.post('/create',  async (req, res) => {
    try {
        let query = `insert into Stationers  (AddressID) values ('${req.body.address_id}')`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "yeni kırtasiyeci oluşturuldu"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})

//update işlemi için put
stationer_router.put('/update',  async (req, res) => {
    try {
        let query = `update Stationers set AddressID  = '${req.body.address_id}'
            where StationerID = '${req.body.stationer_id}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "kırtasiyeci güncellendi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})

//delete işlemi için delete
stationer_router.delete('/delete',  async (req, res) => {
    try {
        let query = `DELETE from  Stationers where StationerID = '${req.body.stationer_id}'`;
        const result = await db.query(query)
        res.status(201).json({
            "message": "kırtasiyeci silindi"
        })
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.status(400).json({
            "message": "hata",
            "err" : err.message
        })
    }

})

exports.routes = stationer_router