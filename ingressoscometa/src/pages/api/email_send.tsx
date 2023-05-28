import express, { Request, Response } from 'express';
import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "70bd5991213dfe",
    pass: "1be91b5035c5ac"
  }
});

// Exemplo de envio de email
const mailOptions = {
  from: 'cometanoreply@gmail.com',
  to: 'tassiocarvalhor@gmail.com',
  subject: 'Bem-vindo Tássio!',
  text: 'Olá, bem-vindo ao nosso site!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Erro ao enviar o e-mail de boas-vindas:', error);
  } else {
    console.log('E-mail de boas-vindas enviado com sucesso!', info.response);
  }
});
