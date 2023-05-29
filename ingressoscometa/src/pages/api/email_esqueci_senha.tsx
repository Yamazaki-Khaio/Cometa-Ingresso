import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import crypto, { createHash } from 'crypto';
import fetch from 'isomorphic-unfetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {email} = req.body;
  const {id_user} = req.body.id
  const novaSenha = crypto.randomBytes(4).toString("hex")
  const hash = createHash('sha256')
  hash.update(novaSenha)
  console.log(req)
  const form = {
    id: id_user,
    senha: hash.digest('hex'),
  }
  console.log(form.senha)
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: "ingressoscometanaoresponda@outlook.com",
      pass: "Vaidormir23"
    }
  });

  const mailOptions = {
    from: 'ingressoscometanaoresponda@outlook.com',
    to: email,
    subject: 'Esqueci a minha senha',
    text: 'A nova senha de sua conta é '+ novaSenha + '.'
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Eles passarão")
    const res = await fetch(`/api/usuario`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      });
    
  } catch (error) {
    console.error('Erro ao enviar o e-mail de redefinir senha:', error);
    res.status(500).json({ error: 'Erro ao enviar o e-mail de redefinir senha.' });
  }
}
