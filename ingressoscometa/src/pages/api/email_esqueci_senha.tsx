import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

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
    text: 'Acesse o seguinte link para redefinir a sua senha.'
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail de redefinir senha enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail de redefinir senha:', error);
    res.status(500).json({ error: 'Erro ao enviar o e-mail de redefinir senha.' });
  }
}
