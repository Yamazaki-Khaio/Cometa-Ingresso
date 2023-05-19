import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = mysql.createConnection({
    host: "cometacngressosserver.mysql.database.azure.com",
    user: "cometaingressos",
    password: "Vaidormir23",
    database: "cometadb",
  });

  const { nome, cpf, email, telefone, senha, endereco, numeroCasa, complemento } = req.body;

  const query = `INSERT INTO usuarios (nome, cpf, email, telefone, senha, endereco, numeroCasa, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [nome, cpf, email, telefone, senha, endereco, numeroCasa, complemento];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao inserir dados no banco de dados' });
    } else {
      res.status(200).json({ message: 'Dados inseridos com sucesso' });
    }

    connection.end();
  });
}
