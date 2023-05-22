import express from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';
import { randomInt } from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
      const { nome, cpf, data_nascimento, senha, tipoUsuario } = req.body as UsuarioAttributes;

      await sequelize.sync(); // Sincroniza o modelo com o banco de dados antes de criar um usuário

      await UsuarioModel.create({
        nome,
        cpf,
        data_nascimento,
        senha,
        tipoUsuario,
      });
    } else if (req.method === 'PUT') {
      // Atualizar usuário
      const sql = 'UPDATE evento SET ? WHERE id=?';
      connection.query(sql, [req.body, req.query.id], (error, results, fields) => {
        if (error) {
          console.error('Erro ao atualizar usuário: ', error);
          res.status(500).send('Erro ao atualizar usuário.');
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
