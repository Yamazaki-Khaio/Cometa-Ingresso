import express from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';
import { randomInt } from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const router = express.Router();
  var x = randomInt(1000);

  router.use('/', async (req, res) => {
    if (req.method === 'POST') {
      // Criar usuário
      const sql = 'INSERT INTO cardc (id_usuario, nCard, data_validade, cvv, titular) VALUES (?, ?, ?, ?, ?)';
      
      const params = [
        req.body.id,
        req.body.nCard,
        req.body.data_validade,
        req.body.cvv,
        req.body.titular,
      ];
      
      connection.query(sql, params, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo cartao: ', error);
          res.status(500).send('Erro ao inserir novo cartao.');
          return;
        }
      });

    } else if (req.method === 'GET') {
      if (!req.query) {
        const sql = 'SELECT * FROM cardc';
        connection.query(sql, (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar cartao: ', error);
            res.status(500).send('Erro ao buscar cartao.');
            return;
          }
          res.json(results);
        });
      } else {
        const sql = 'SELECT * FROM cardc';
        connection.query(sql, (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar cartao: ', error);
            res.status(500).send('Erro ao buscar cartao.');
            return;
          }
          res.json(results);
        });
      }
    } else if (req.method === 'DELETE') {
      // Remover usuário
      const sql = 'DELETE FROM cartao WHERE id=?';
      connection.query(sql, [req.body.idUser], (error, results, fields) => {
        if (error) {
          console.error('Erro ao remover cartao: ', error);
          res.status(500).send('Erro ao remover cartao.');
          return;
        }
        res.json(results);
      });

    
    } else { (req.method === 'PUT') 
      console.log("passo1")

      if (req.body['senha']){
        const sql = 'UPDATE cartao SET senha = ? WHERE id = ?';
        connection.query(sql, [req.body, req.query.id], (error, results, fields) => {
          if (error) {
            console.error('Erro ao atualizar senha: ', error);
            res.status(500).send('Erro ao atualizar senha.');
            return;
          }
          res.json(results);
        });
      }
      else if (req.body['nome']) {
        console.log("passo2")
        const sql = 'UPDATE usuario SET nome = ? WHERE id = ?';
        connection.query(sql, [req.body['nome'], req.query.id], (error, results, fields) => {
          if (error) {
            console.error('Erro ao atualizar senha: ', error);
            res.status(500).send('Erro ao atualizar senha.');
            return;
          }
          res.json(results);
        });
      }
    }
  });

  router(req, res); // Invoke the router with req and res objects
}
