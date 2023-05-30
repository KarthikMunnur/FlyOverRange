// To send email with AWS Simple Email Service(SES) API in Node.js.

/*----------------------Sample codes----------------------*/


// .env
// AWS_KEY='AKAMTCsample2FUUQ'
// AWS_SECRET='4RsVEfTBJudFA9/pyFnjPvFsampleCbfq69bRV'
// AWS_IAM_NAME='IAM_NAME'
// AWS_SES_SENDER='email@aws.com'

// init AWS SES
var ses = require('node-ses')
var SESserver = ses.createClient({
        key: process.env.AWS_KEY,
        secret: process.env.AWS_SECRET
    })

var receiver_email = 'sample@email.com'
var aws_sender_email = process.env.AWS_SES_SENDER

// min version:
SESserver.sendEmail({
    to: receiver_email,
    from: aws_sender_email,
    subject: 'This is email title',
    message: 'hey yo!'
}, function(err, data) {
    if (err) {
        console.log('err when send email out: ', err);
        return cb(err, null)
    }
    console.log('successfullt send email out to ', receiver_email);
    cb(null, 'email sent')
})

// dedicate version:
SESserver.sendEmail({
    to: receiver_email,
    from: aws_sender_email,
    cc: null,
    bcc: ['bcc@email.com'],
    subject: 'This is email title',
    message: notificationTemplate({
        title: 'Verify this Email!',
        description: `Please click the button to verify this email and coninue to your dashboard.`,
        destination: `api/verify/email/${token}`,
        button: `verify this email`
    }),
    altText: 'plain text'
}, function(err, data, res) {
    if (err) {
        console.log(err);
        return cb(err, null)
    }
    return cb(null, 'email sent')
})

function notificationTemplate(data) {
    return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link href='https://fonts.googleapis.com/css?family=PT+Serif|Lato:300' rel='stylesheet' type='text/css' />
            <style media="screen">
                .verify {
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    cursor: pointer;
                    padding: 15px 50px;
                    border-radius: 4px;
                    font-size: 0.8em;
                    font-weight: 500;
                    border: none;
                    color: white;
                    background: #04AADC;
                    transition: .1s background ease-in-out;
                    margin-top: 20px;
                }
                .verify:hover {
                    transition: .1s background ease-in-out;
                    background: #03528D;
                }
            </style>
        </head>
        <body>
            <div style="text-align: center; font-weight: 300; font-family: 'Lato', sans-serif; padding-top:30px;">
                <svg width="30px" viewBox="582 404 71 71" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Group-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(582.000000, 404.000000)">
                        <path d="M35,70 C54.3299662,70 70,54.3299662 70,35 C70,15.6700338 54.3299662,0 35,0 C15.6700338,0 0,15.6700338 0,35 C0,54.3299662 15.6700338,70 35,70 Z M35,59.5 C48.5309764,59.5 59.5,48.5309764 59.5,35 C59.5,21.4690236 48.5309764,10.5 35,10.5 C21.4690236,10.5 10.5,21.4690236 10.5,35 C10.5,48.5309764 21.4690236,59.5 35,59.5 Z" id="Combined-Shape" fill="#04AADC"></path>
                    </g>
                </svg>
                <div>
                    <h1 style="font-weight: 300; text-transform: capitalize">${data.title}</h1>
                    <h2 style="font-weight: 300; font-size: 1.1em; color: rgba(0,0,0,0.4); margin-top: 10px;">${data.description}</h2>
                    <a href="http://localhost:8000/${data.destination}" target="_blank"><button class="verify">${data.button}</button></a>
                </div>
            </div>
        </body>
        </html>`
}
