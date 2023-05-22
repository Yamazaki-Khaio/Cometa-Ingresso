import express from 'express';
import { connection } from './db';
import Evento from './classes/Evento';
import { NextApiRequest, NextApiResponse } from 'next';
import { randomInt } from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const router = express.Router();
  var x = randomInt(1000);

  router.use('/', async (req, res) => {
    if (req.method === 'POST') {
      // Criar evento
      const sql = "INSERT INTO evento (id, id_usuario, nome_evento, data_evento, descricao_evento, ativado, imagem) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const params = [
        x,
        '1',
        req.body.nome,
        req.body.dataEvento,
        req.body.descricao,
        '1',
        '',
      ];
      connection.query(sql, params, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo evento', error);
          res.status(500).send('Erro ao inserir novo evento.');
          return;
        }
        res.json(results);
      });
    } else if (req.method === 'GET') {
      // Listar eventos
      const sql = 'SELECT * FROM evento';
      connection.query(sql, (error, results, fields) => {
        if (error) {
          console.error('Erro ao buscar eventos: ', error);
          res.status(500).send('Erro ao buscar eventos.');
          return;
        }
        res.json(results);
      });
    } else if (req.method === 'DELETE') {
      // Remover evento
      const sql = 'DELETE FROM evento WHERE id=?';
      connection.query(sql, [req.body.idUser], (error, results, fields) => {
        if (error) {
          console.error('Erro ao remover evento: ', error);
          res.status(500).send('Erro ao remover evento.');
          return;
        }
        res.json(results);
      });
    } else if (req.method === 'PUT') {
      // Atualizar evento
      const sql = 'UPDATE evento SET ? WHERE id=?';
      connection.query(sql, [req.body, req.query.id], (error, results, fields) => {
        if (error) {
          console.error('Erro ao atualizar evento: ', error);
          res.status(500).send('Erro ao atualizar evento.');
          return;
        }
        res.json(results);
      });
    } else {
      res.status(404).send('Rota não encontrada.');
    }
  });

  router(req, res); // Invoke the router with req and res objects
}
