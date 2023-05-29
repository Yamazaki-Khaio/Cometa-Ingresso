import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from './db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Criar email
    const { id_usuario, email } = req.headers;
    const sql = 'INSERT INTO email (id_usuario, email) VALUES (?, ?)';
    const params = [id_usuario, email];

    connection.query(sql, params, (error, results, fields) => {
      if (error) {
        console.error('Erro ao inserir novo email:', error);
        res.status(500).send('Erro ao inserir novo email.');
        return;
      }
      res.json(results);
    });
  } else if (req.method === 'GET') {
    if (req.query.email) {
      console.log("passou aqui")
      // Buscar email específico
      const sql = 'SELECT * FROM email WHERE email = ?';
      const param = req.query.email;

      connection.query(sql, param, (error, results, fields) => {
        if (error) {
          console.error('Erro ao buscar email:', error);
          res.status(500).send('Erro ao buscar email.');
          return;
        }
        if (results.length > 0) {
          // O email existe no banco de dados
          res.status(200).json({ exists: true });
        } else {
          // O email não existe no banco de dados
          res.status(200).json({ exists: false });
        }
      });
    } else {
      // Listar todos os emails
      const sql = 'SELECT * FROM email';

      connection.query(sql, (error, results, fields) => {
        if (error) {
          console.error('Erro ao buscar emails:', error);
          res.status(500).send('Erro ao buscar emails.');
          return;
        }
        res.json(results);
      });
    }
  } else if (req.method === 'DELETE') {
    // Remover email
    const sql = 'DELETE FROM email WHERE id = ?';
    const param = req.query.id;

    connection.query(sql, param, (error, results, fields) => {
      if (error) {
        console.error('Erro ao remover email:', error);
        res.status(500).send('Erro ao remover email.');
        return;
      }
      res.json(results);
    });
  } else if (req.method === 'PUT') {
    // Atualizar email
    const { id_usuario, email } = req.headers;
    const sql = 'UPDATE email SET email = ? WHERE id_usuario = ?';
    const params = [email, id_usuario];

    connection.query(sql, params, (error, results, fields) => {
      if (error) {
        console.error('Erro ao atualizar email:', error);
        res.status(500).send('Erro ao atualizar email.');
        return;
      }
      res.json(results);
    });
  } else {
    res.status(404).send('Rota não encontrada.');
  }
}