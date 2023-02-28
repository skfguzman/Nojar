let smtpKey = 'SG.y_3vSGgIQEOeQ_5KeNpypQ.1Q5JosTi1evugD3ZQviN6sdJvE3_t9ThsTrTvyxHJaI'
const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(smtpKey)
const msg = {
    to: 'fguzman10203@outlook.com', // Change to your recipient
    from: 'info@superkiwi.do', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })