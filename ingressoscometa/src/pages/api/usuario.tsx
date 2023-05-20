import express from 'express';
import {connection} from './db';
import Evento from './classes/Usuario';
import { NextApiRequest, NextApiResponse } from 'next';
import { randomInt } from 'crypto';

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    const router = express.Router();
    var x = randomInt(1000)
  router.use('/', async (req, res) => {
    if (req.method === 'POST') {
      // Criar evento
      const sql = "INSERT INTO usuario (id, nome, cpf, data_nascimento, senha, tipo_user) VALUES (?, ?, ?, ?, ?, ?)";
      const params = [
        x,
        req.body.nome,
        req.body.cpf,
        req.body.data_nascimento,
        req.body.senha,
        '1',
      ];
            connection.query(sql, params, (error, results, fields) => {
                if (error) {
                console.error('Erro ao inserir novo usuario', error);
                res.status(500).send('Erro ao inserir novo usuario.');
                return;
                }
                res.json(results);
        });
        } else if (req.method === 'GET') {
          // Listar usuários
          const sql = 'SELECT * FROM usuario';
          connection.query(sql, (error, results, fields) => {
            if (error) {
              console.error('Erro ao buscar usuario: ', error);
              res.status(500).send('Erro ao buscar usuario.');
              return;
            }
            res.json(results);
          });
        } else if (req.method === 'DELETE') {
          // Remover usuário
          const sql = 'DELETE FROM usuario WHERE id=?';
          connection.query(sql, [req.body.idUser], (error, results, fields) => {
            if (error) {
              console.error('Erro ao remover usuario: ', error);
              res.status(500).send('Erro ao remover usuario.');
              return;
            }
            res.json(results);
          });
        } else if (req.method === 'PUT') {
          // Atualizar evento
          const sql = 'UPDATE evento SET ? WHERE id=?';
          connection.query(
            sql,
            [req.body, req.query.id],
            (error, results, fields) => {
              if (error) {
                console.error('Erro ao atualizar usuario: ', error);
                res.status(500).send('Erro ao atualizar usuario.');
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
