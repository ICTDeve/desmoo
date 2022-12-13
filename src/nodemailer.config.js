"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function enviarEmail(mensagem, destinatario) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'victorribeiro.dev@gmail.com', // generated ethereal user
      pass: 'tsvdqtrdxrxnzanu', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Suporte Desmoo" <victorribeiro.dev@gmail.com>', // sender address
    to: destinatario, // list of receivers
    subject: "Código de verificação", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Olá! Obrigado por se juntar a nós! Aqui está seu código de verificação: ${mensagem}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = enviarEmail