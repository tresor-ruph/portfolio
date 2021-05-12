const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config()

const app = express();
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.post('/mailTo', function (req, res) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'tresortek1@gmail.com',
        subject: 'job opportunity',

        html: `<ul><li>sender : ${req.body.email}</li><li>name : ${req.body.name}</li><li>message : ${req.body.message}</li></ul>`

    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log(err)
            res.send('an error occured')
        } else {
            console.log('email sent ')
            res.send('email sent')
        }
    })




})
app.listen(process.env.PORT || 8000, () => {
    console.log(`your server is running on port ${process.env.PORT || 8000}`);
});