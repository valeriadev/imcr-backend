const googleApiAppend = require('../services/googleApi');
const mail= require('../services/email.service');

function record(req, res){
   
    console.log(JSON.stringify(req.body));
    console.log(req.body.quantity);
    googleApiAppend.appendRecord(Object.values(req.body));
    mail.sendMail();
    res.sendStatus(200);   

}

module.exports = {record};