import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cometanoreply@gmail.com',
    pass: 'Vaidormir23'
  }
});

app.post('/email_send', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const mailOptions = {
      from: 'tassiocarvalhor@gmail.com',
      to: email,
      subject: 'Bem-vindo!',
      text: 'Olá, bem-vindo ao nosso site!'
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'E-mail de boas-vindas enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail de boas-vindas:', error);
    res.status(500).json({ error: 'Erro ao enviar o e-mail de boas-vindas.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
