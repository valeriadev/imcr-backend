var nodemailer = require('nodemailer');

var trasporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'imcr.notify@gmail.com',
        pass: 'Aa123456imcr'
    }
});


function sendMail(values) {

    const mailOptions = {
        from: 'imcr.notify@gmail.com',
        to: ['valeriamadaev@gmail.com', 'haberdan@gmail.com '],
        subject: 'IMCR new record',
        html: '<p> Imcr record</p>'
    };

    mailOptions.html += `<p>${values}</p>`;
    
    trasporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.error(err)
        else
            console.log(info);
    });
}
module.exports = { sendMail };