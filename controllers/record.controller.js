const googleApiAppend = require('../services/googleApi');
const mail= require('../services/email.service');
const filter = require("../services/emptyValues");
const config = require("../config");


function record(req, res){
    console.log(req.body)
    const filteredArray = filter.removeEmptyValues(Object.values(req.body));
    googleApiAppend.appendRecord(filteredArray, config.recordsSheetId);

    mail.sendMail(filteredArray, "Hospital");
    res.sendStatus(200);   
}

function getRecord(req, res){
    googleApiAppend.getLastRecordByHospitalAndProdNumber(req.query.hospital, req.query.procNum)
    .then(record=>{
        res.json(record);
    })
    .catch((err)=>{
        res.sendStatus(500);
        console.error(err)
    })
}


function abbott(req, res){
    console.log(req.body)
    const filteredArray = filter.removeEmptyValues(Object.values(req.body));
    googleApiAppend.appendRecord(filteredArray,config.abbottSheetId);

    mail.sendMail(filteredArray, "Abbott");
    res.sendStatus(200);   
}

module.exports = {record,abbott,getRecord};