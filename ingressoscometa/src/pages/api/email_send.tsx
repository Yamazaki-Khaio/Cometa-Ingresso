import express, { Request, Response } from 'express';
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  service: 'gmail',
  auth: {
    user: 'cometanoreply@gmail.com',
    pass: 'Vaidormir23'
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
