import express from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';

const router = express.Router();

router.all('/', async (req, res) => {
    if (req.method === 'GET') {
        try {
            const sql = 'SELECT * FROM endereco';
            connection.query(sql, (error, results, fields) => {
                if (error) {
                    console.error('Erro ao buscar endereços: ', error);
                    res.status(500).send('Erro ao buscar endereços.');
                    return;
                }
                res.json(results);
            });
        } catch (error) {
            console.error('Erro ao buscar endereços: ', error);
            res.status(500).send('Erro ao buscar endereços.');
        }
    } else if (req.method === 'POST') {
        try {
            const sql = 'INSERT INTO endereco SET id_endereco=?, cep=?, rua=?, numero=?, complemento=?, UsuarioID=?';
            const values = [
                req.headers.id_endereco,
                req.headers.cep,
                req.headers.rua,
                req.headers.numero,
                req.headers.complemento,
                req.headers.UsuarioID
            ];
            connection.query(sql, values, (error, results, fields) => {
                if (error) {
                    console.error('Erro ao inserir novo endereço: ', error);
                    res.status(500).send('Erro ao inserir novo endereço.');
                    return;
                }
                res.json(results);
            });
        } catch (error) {
            console.error('Erro ao inserir novo endereço: ', error);
            res.status(500).send('Erro ao inserir novo endereço.');
        }
    } else if (req.method === 'PUT') {
        try {
            const sql = 'UPDATE endereco SET cep=?, rua=?, numero=?, complemento=?, UsuarioID=? WHERE id_endereco=?';
            const values = [
                req.headers.cep,
                req.headers.rua,
                req.headers.numero,
                req.headers.complemento,
                req.headers.UsuarioID,
                req.headers.id_endereco
            ];
            connection.query(sql, values, (error, results, fields) => {
                if (error) {
                    console.error('Erro ao atualizar endereço: ', error);
                    res.status(500).send('Erro ao atualizar endereço.');
                    return;
                }
                res.json(results);
            });
        } catch (error) {
            console.error('Erro ao atualizar endereço: ', error);
            res.status(500).send('Erro ao atualizar endereço.');
        }
    } else if (req.method === 'DELETE') {
        try {
            const sql = 'DELETE FROM endereco WHERE id_endereco=?';
            const values = [req.headers.id_endereco];
            connection.query(sql, values, (error, results, fields) => {
                if (error) {
                    console.error('Erro ao deletar endereço: ', error);
                    res.status(500).send('Erro ao deletar endereço.');
                    return;
                }
                res.json(results);
            });
        } catch (error) {
            console.error('Erro ao deletar endereço: ', error);
            res.status(500).send('Erro ao deletar endereço.');
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
});

export default router;
