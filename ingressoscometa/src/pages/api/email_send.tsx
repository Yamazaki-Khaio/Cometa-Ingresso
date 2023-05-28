import express, { Request, Response } from 'express';
import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // Não está usando SSL/TLS, mas sim STARTTLS
  auth: {
    user: "ingressoscometanaoresponda@outlook.com",
    pass: "Vaidormir23"
  }
});

// Exemplo de envio de email
const mailOptions = {
  from: 'ingressoscometanaoresponda@outlook.com',
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
