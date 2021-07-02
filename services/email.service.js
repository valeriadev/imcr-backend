var nodemailer = require('nodemailer');
const {gmail} = require('../config/index.js');

var trasporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmail.user,
        pass: gmail.pass
    }
});


function sendMail(values, type) {

    const mailOptions = {
        from: gmail.from,
        to: gmail.to,
        subject: 'IMCR new record - ' + type,
        html: `<p> Imcr record ${type}</p>`
    };

    mailOptions.html += `<p>${values}</p>`;
    
    trasporter.sendMail(mailOptions, function (err, info) {
        if (err){
            console.error(err)
        }
        else
            console.log(info);
    });
}
module.exports = { sendMail };