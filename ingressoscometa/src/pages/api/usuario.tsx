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
      const sql = 'INSERT INTO usuario (cpf, nome, senha, data_nascimento, tipo_user) VALUES (?, ?, ?, ?, ?)';
      const emailSql = 'INSERT INTO email (id_usuario, email) VALUES (?, ?)';
      const telSql = 'INSERT INTO telefone (id_usuario, telefone) VALUES (?, ?)';
      //const endSql = 'INSERT INTO endereco (id_usuario, cep, rua, numero, complemento, id_evento)  VALUES (?, ?, ?, ?, ?, ?)'
      const params = [
        req.body.cpf,
        req.body.nome,
        req.body.senha,
        req.body.data_nascimento,
        req.body.tipo
      ];
      
      connection.query(sql, params, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo usuário: ', error);
          res.status(500).send('Erro ao inserir novo usuário.');
          return;
        }
      
        const usuarioId = results.insertId; // Obtém o ID do usuário recém-inserido
      
        const emailParams = [
          usuarioId,
          req.body.email
        ];
      
        const telParams = [
          usuarioId,
          req.body.telefone
        ]
        /*const endParams = [
          usuarioId,
          req.body.cep,
          req.body.rua,
          req.body.numero,
          req.body.complemento,
          '1320'
        ]*/

        connection.query(telSql, telParams, (error, results, fields) => {
          if (error) {
            console.error('Erro ao inserir novo telefone: ', error);
            res.status(500).send('Erro ao inserir novo telefone.');
            return;
          }
          res.json(results);
        });
        /*connection.query(endSql, endParams, (error, results, fields) => {
          if (error) {
            console.error('Erro ao inserir novo endereco: ', error);
            res.status(500).send('Erro ao inserir novo endereco.');
            return;
          }
          res.json(results);
        });*/
        connection.query(emailSql, emailParams, (error, results, fields) => {
          if (error) {
            console.error('Erro ao inserir novo email: ', error);
            res.status(500).send('Erro ao inserir novo email.');
            return;
          }
          res.json(results);
        });
      });

    } else if (req.method === 'GET') {
      if (!req.query) {
        const sql = 'SELECT * FROM usuario';
        connection.query(sql, (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar usuário: ', error);
            res.status(500).send('Erro ao buscar usuário.');
            return;
          }
          res.json(results);
        });
      } else if (req.query['cpf']) {
        const sql = 'SELECT * FROM usuario WHERE cpf=?';
        connection.query(sql, [req.query['cpf']], (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar usuário: ', error);
            res.status(500).send('Erro ao buscar usuário.');
            return;
          }
          res.json(results);
        });
      } else if (req.query['id']) {
        const sql = 'SELECT * FROM usuario WHERE id=?';
        connection.query(sql, [req.query['id']], (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar usuário: ', error);
            res.status(500).send('Erro ao buscar usuário.');
            return;
          }
          res.json(results);
        });
      } else {
        const sql = 'SELECT * FROM usuario';
        connection.query(sql, (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar usuário: ', error);
            res.status(500).send('Erro ao buscar usuário.');
            return;
          }
          res.json(results);
        });
      }
    } else if (req.method === 'DELETE') {
      // Remover usuário
      const sql = 'DELETE FROM usuario WHERE id=?';
      connection.query(sql, [req.body.idUser], (error, results, fields) => {
        if (error) {
          console.error('Erro ao remover usuário: ', error);
          res.status(500).send('Erro ao remover usuário.');
          return;
        }
        res.json(results);
      });

    
    } else if (req.method === 'PUT') {
      console.log("passo1")
      // Atualizar usuário
      if (req.body['senha']){
        const sql = 'UPDATE usuario SET senha = ? WHERE id = ?';
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
