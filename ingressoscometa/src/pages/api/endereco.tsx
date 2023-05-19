import express from 'express';
import {connection} from './db';
import Evento from './classes/Evento';
import { NextApiRequest, NextApiResponse } from 'next';

const router = express.Router();

export default function handler(req: NextApiRequest,res: NextApiResponse){
    res.status(200).json({ message: 'Vai dormir!' });
    
    router.post('/cadastro', async (req, res) => {
        const endereco = new Endereco(
            req.body.id_endereco,
            req.body.cep,
            req.body.rua,
            req.body.numero,
            req.body.complemento,
            req.body.UsuarioID
        );
        const sql = 'INSERT INTO endereco SET ?';
        connection.query(sql, endereco, (error, results, fields) => {
            if (error) {
            console.error('Erro ao inserir novo usuário: ', error);
            res.status(500).send('Erro ao inserir novo usuário.');
            return;
            }
            res.json(results);
        });
    });

    router.get('/cadastros', async (req, res) => {
        const sql = 'SELECT * FROM endereco';
        connection.query(sql, (error, results, fields) => {
            if (error) {
            console.error('Erro ao buscar endereço: ', error);
            res.status(500).send('Erro ao buscar endereço.');
            return;
            }
            res.json(results);
        });
    }

    );
    router.get('/cadastro/:id', async (req, res) => {
        const sql = 'SELECT * FROM endereco WHERE id_endereco=?';
        connection.query(sql, [req.params.id], (error, results, fields) => {
            if (error) {
            console.error('Erro ao buscar endereço: ', error);
            res.status(500).send('Erro ao buscar endereço.');
            return;
            }
            res.json(results);
        });
    }

    );
    router.put('/cadastro/:id', async (req, res) => {
        const endereco = new Endereco(
            req.body.id_endereco,
            req.body.cep,
            req.body.rua,
            req.body.numero,
            req.body.complemento,
            req.body.UsuarioID
        );
        const sql = 'UPDATE endereco SET cep=?, rua=?, numero=?, complemento=?, UsuarioID=? WHERE id_endereco=?';
        connection.query(sql, [endereco.cep, endereco.rua, endereco.numero, endereco.complemento, endereco.UsuarioID, req.params.id], (error, results, fields) => {
            if (error) {
            console.error('Erro ao atualizar endereço: ', error);
            res.status(500).send('Erro ao atualizar endereço.');
            return;
            }
            res.json(results);
        });
    }

    );
    router.delete('/cadastro/:id', async (req, res) => {
        const sql = 'DELETE FROM endereco WHERE id_endereco=?';
        connection.query(sql, [req.params.id], (error, results, fields) => {
            if (error) {
            console.error('Erro ao deletar endereço: ', error);
            res.status(500).send('Erro ao deletar endereço.');
            return;
            }
            res.json(results);
        });
    }

    );
    router.get('/cadastro/:id', async (req, res) => {
        const sql = 'SELECT * FROM endereco WHERE id_endereco=?';
        connection.query(sql, [req.params.id], (error, results, fields) => {
            if (error) {
            console.error('Erro ao buscar endereço: ', error);
            res.status(500).send('Erro ao buscar endereço.');
            return;
            }
            res.json(results);
        });
    }

    );
}
