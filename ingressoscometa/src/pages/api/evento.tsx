import express from 'express';
import {connection} from './db';
import Evento from './classes/Evento';
import { NextApiRequest, NextApiResponse } from 'next';
import { randomInt } from 'crypto';

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    const router = express.Router();
    var x = randomInt(1000)
  router.use('/', async (req, res) => {
    if (req.method === 'POST') {
      // Criar evento
      const sql = "INSERT into evento(id, id_usuario, nome_evento, data_evento, descricao_evento, ativado, imagem) VALUES(?, ?, ?, ?, ?, ?, ?)";
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
          // Listar usuários
          const sql = 'SELECT * FROM usuario';
          connection.query(sql, (error, results, fields) => {
            if (error) {
              console.error('Erro ao buscar usuários: ', error);
              res.status(500).send('Erro ao buscar usuários.');
              return;
            }
            res.json(results);
          });
        } else if (req.method === 'DELETE') {
          // Remover usuário
          const sql = 'DELETE FROM usuario WHERE idUser=?';
          connection.query(sql, [req.body.idUser], (error, results, fields) => {
            if (error) {
              console.error('Erro ao remover usuário: ', error);
              res.status(500).send('Erro ao remover usuário.');
              return;
            }
            res.json(results);
          });
        } else if (req.method === 'PUT') {
          // Atualizar usuário
          const sql = 'UPDATE usuario SET ? WHERE idUser=?';
          connection.query(
            sql,
            [req.body, req.query.id],
            (error, results, fields) => {
              if (error) {
                console.error('Erro ao atualizar usuário: ', error);
                res.status(500).send('Erro ao atualizar usuário.');
                return;
              }
              res.json(results);
            }
          );
        } else {
          res.status(404).send('Rota não encontrada.');
        }
      });
    
      // Executing the router
      router.handle(req, res);
    }
