import express from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const router = express.Router();

  router.all('/', async (req, res) => {
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
      // Listar emails
      const sql = 'SELECT * FROM email';
      connection.query(sql, (error, results, fields) => {
        if (error) {
          console.error('Erro ao buscar emails:', error);
          res.status(500).send('Erro ao buscar emails.');
          return;
        }
        res.json(results);
      });
    }else if (req.query['email']) {
        const sql = 'SELECT * FROM email WHERE email=?';
        connection.query(sql, [req.query['email']], (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar email: ', error);
            res.status(500).send('Erro ao buscar email.');
            return;
          }
          res.json(results);
        });
    } else if (req.method === 'DELETE') {
      // Remover email
      const sql = 'DELETE FROM email WHERE id=?';
      connection.query(sql, [req.query.id], (error, results, fields) => {
        if (error) {
          console.error('Erro ao remover email:', error);
          res.status(500).send('Erro ao remover email.');
          return;
        }
        res.json(results);
      });
    } else if (req.method === 'PUT') {
      // Atualizar email
      const sql = 'UPDATE email SET email=? WHERE id_usuario=?';
      const params = [req.headers.email, req.headers.id_usuario];
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
  });
}
