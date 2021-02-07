const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');

// Instanciar o Express
app = express();

// Criar transportador de Email
let transporter = nodemailer.createTransport({
  host: 'your_demo_email_smtp_host.example.com',
  port: your_demo_email_port,
  secure: true,
  auth: {
    user: 'your_demo_email_address@example.com',
    pass: 'your_demo_email_password'
  }
});

// Envia os Emails toda quarta-feira.
cron.schedule('0 0 * * 3', function () {
  console.log('---------------------');
  console.log('Rodando Cron Job');

  let messageOptions = {
    from: 'your_demo_email_address@example.com',
    to: 'user@example.com',
    subject: 'Email Agendado',
    text: 'Olá. Este email foi enviado automaticamente por nós.'
  };

  transporter.sendMail(messageOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log('Email enviado com sucesso!');
    }
  });
});

// porta onde o serviço escuta
app.listen(3000);