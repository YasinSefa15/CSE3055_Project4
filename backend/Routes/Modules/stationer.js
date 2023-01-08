const express = require('express')
const {db} = require("../../db");


const stationer_router = express.Router()

stationer_router.get('/', async (req, res) => {

    try {
        const result = await db.query("select Stationers.StationerID,Stationers.AddressID,Addresses.City,Addresses.Address,Addresses.sName from Stationers inner join Addresses on Stationers.AddressId = Addresses.AddressID  ")
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
        console.log(req.body)
        const AddressID =parseInt(req.body.inputs.AddressID)
        let query = `insert into Stationers  (AddressID) values ('${AddressID}')`;
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
        const AddressID = parseInt(req.body.inputs.AddressID)
        const sStationerID = parseInt(req.body.inputs.sStationerID)
        let query = `update Stationers set AddressID  = '${AddressID}'
            where sStationerID = '${sStationerID}'`;
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
        let query = `DELETE from  Stationers where StationerID = '${req.body.StationerID}'`;
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