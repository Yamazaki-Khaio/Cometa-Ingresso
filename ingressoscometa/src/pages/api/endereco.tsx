import express from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const router = express.Router();

    router.use('/', async (req, res) => {
        if (req.method === 'POST') {
            // Cadastrar endereço
            const { cep, rua, numero, complemento, UsuarioID } = req.headers;
            const sql =
                'INSERT INTO endereco (cep, rua, numero, complemento, UsuarioID) VALUES (?, ?, ?, ?, ?)';
            const params = [cep, rua, numero, complemento, UsuarioID];
            connection.query(sql, params, (error, results, fields) => {
                if (error) {
                    console.error('Erro ao cadastrar endereço:', error);
                    res.status(500).send('Erro ao cadastrar endereço.');
                    return;
                }
                res.json(results);
            });
        } else if (req.method === 'GET') {
            if (req.query && req.query.id) {
                // Obter endereço por ID
                const sql = 'SELECT * FROM endereco WHERE id_endereco=?';
                connection.query(sql, [req.query.id], (error, results, fields) => {
                    if (error) {
                        console.error('Erro ao buscar endereço:', error);
                        res.status(500).send('Erro ao buscar endereço.');
                        return;
                    }
                    res.json(results);
                });
            } else {
                // Obter todos os endereços
                const sql = 'SELECT * FROM endereco';
                connection.query(sql, (error, results, fields) => {
                    if (error) {
                        console.error('Erro ao buscar endereços:', error);
                        res.status(500).send('Erro ao buscar endereços.');
                        return;
                    }
                    res.json(results);
                });
            }
        } else if (req.method === 'PUT') {
            // Atualizar endereço
            const { cep, rua, numero, complemento, UsuarioID } = req.headers;
            const sql =
                'UPDATE endereco SET cep=?, rua=?, numero=?, complemento=?, UsuarioID=? WHERE id_endereco=?';
            const params = [cep, rua, numero, complemento, UsuarioID, req.query.id];
            connection.query(sql, params, (error, results, fields) => {
                if (error) {
                    console.error('Erro ao atualizar endereço:', error);
                    res.status(500).send('Erro ao atualizar endereço.');
                    return;
                }
                res.json(results);
            });
        } else if (req.method === 'DELETE') {
            // Deletar endereço
            const sql = 'DELETE FROM endereco WHERE id_endereco=?';
            connection.query(sql, [req.query.id], (error, results, fields) => {
                if (error) {
                    console.error('Erro ao deletar endereço:', error);
                    res.status(500).send('Erro ao deletar endereço.');
                    return;
                }
                res.json(results);
            });
        } else {
            res.status(404).send('Rota não encontrada.');
        }
    });
}
