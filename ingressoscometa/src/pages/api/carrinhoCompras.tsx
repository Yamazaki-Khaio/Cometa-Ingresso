import express from 'express';
import {connection} from './db';
import Carrinho from './classes/Carrinho';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method === 'GET'){
        if(!req.query){
            const sql = 'SELECT * FROM carrinho';
            connection.query(sql, (error, results, fields) => {
                if (error) {
                console.error('Erro ao buscar carrinho: ', error);
                res.status(500).send('Erro ao buscar carrinho.');
                return;
                }
                res.json(results);
            });
      
        }else{
            if(req.query['id']){
                const sql = 'SELECT * FROM carrinho WHERE id=?';
                connection.query(sql,[req.query['id']], (error, results, fields) => {
                    if (error) {
                    console.error('Erro ao buscar carrinho: ', error);
                    res.status(500).send('Erro ao buscar carrinho.');
                    return;
                    }
                    res.json(results);
                });
                
            }
        }
    }else if(req.method === 'POST'){

            const sql = 'INSERT INTO carrinho (id_usuario, id_ingresso, quant_ingresso)  VALUES (?, ?, ?)'

            const usuarioId = results.insertId;

            const params = [
                req.body.id_usuario,
               //constante que vai receber o iduser do usuario logado,
               req.body.quant_ingresso
            ]

            connection.query(sql, params, (error, results, fields) => {
                if (error) {
                        console.error('Erro ao inserir novo carrinho de compras: ', error);
                        res.status(500).send('Erro ao inserir novo carrinho de compras.');
                    return;
                }
            res.json(results);
        });
    }
}

const router = express.Router();

// Criar carrinho
router.post('/', async (req, res) => {
    const carrinho = new Carrinho(
        req.body.id_carrinho,
    );
    const sql = 'INSERT INTO carrinho (id_usuario, id_ingresso, quant_ingresso)  VALUES (?, ?, ?)'
    connection.query(sql, carrinho, (error, results, fields) => {
        if (error) {
        console.error('Erro ao inserir novo carrinho de compras: ', error);
        res.status(500).send('Erro ao inserir novo carrinho de compras.');
        return;
        }
        res.json(results);
    });
});
  

// Listar carrinhos
router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM carrinho';
    connection.query(sql, (error, results, fields) => {
        if (error) {
        console.error('Erro ao buscar carrinho de compras: ', error);
        res.status(500).send('Erro ao buscar carrinho de compras.');
        return;
        }
        res.json(results);
    });
});
  

// Buscar carrinho por ID
router.get('/:id', async (req, res) => {
    const sql = 'SELECT * FROM carrinho WHERE id_carrinho=?';
    connection.query(sql, [req.params.id], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar carrinho de compras: ', error);
            res.status(500).send('Erro ao buscar carrinho de compras.');
            return;
        }
        res.json(results);
    });
});

// Atualizar carrinho:
router.put('/:id', async (req, res) => {
    const sql = 'UPDATE carrinho SET ? WHERE id_carrinho=?';
    connection.query(
        sql,
        [req.body, req.params.id],
        (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar carrinho de compras: ', error);
            res.status(500).send('Erro ao atualizar carrinho de compras.');
            return;
        }
        res.json(results);
        }
    );
});


