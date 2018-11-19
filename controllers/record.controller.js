const googleApiAppend = require('../services/googleApi');
const mail= require('../services/email.service');
const filter = require("../services/emptyValues");

function record(req, res){
    const filteredArray = filter.removeEmptyValues(Object.values(req.body));
    googleApiAppend.appendRecord(filteredArray);

    mail.sendMail(filteredArray);
    res.sendStatus(200);   
}

module.exports = {record};