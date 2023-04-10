const admin = require('firebase-admin');
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require("cors")({ origin: true });
admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'login',
    user: functions.config().gmail.user,
    pass: functions.config().gmail.pass,
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        console.log(req.body)
        const data = req.body.data;
        transporter.sendMail({
            to: 'daniel.cortild@gmail.com',
            subject: 'New Contact on www.danielcortild.me',
            from: 'NoReply ILPlatform <noreply@ilplatform.be>',
            text: `Hello Daniel,

Name: ${data?.name}
Email: ${data?.mail}
Message: ${data?.message}

Have a nice day,

The Daniel Cortild Bot`,
        }, (error, info) => error ? res.send({status: 400, data: error}) : res.send({status: 200, data: info}))
    });
});