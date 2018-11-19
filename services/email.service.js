var nodemailer = require('nodemailer');

var trasporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'imcr.notify@gmail.com',
        pass: 'Aa123456imcr'
    }
});

const mailOptions = {
    from: 'imcr.notify@gmail.com',
    to: ['valeriamadaev@gmail.com', 'haberdan@gmail.com '],
    subject: 'IMCR new record',
    html: '<p> Imcr record</p>'
};

function sendMail() {
    trasporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.error(err)
        else
            console.log(info);
    });
}
module.exports = { sendMail };