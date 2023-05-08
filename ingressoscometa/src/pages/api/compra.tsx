import express from 'express';
import {connection} from './db';
import Compra from './classes/Compra';

const router = express.Router();

// Criar compra
router.post('/', async (req, res) => {
    const compra = new Compra(
        req.body.id_compra,
        req.body.id_carrinho,
        req.body.data
    );
    const sql = 'INSERT INTO compra SET ?';
    connection.query(sql, compra, (error, results, fields) => {
        if (error) {
        console.error('Erro ao inserir nova compra: ', error);
        res.status(500).send('Erro ao inserir nova compra.');
        return;
        }
        res.json(results);
    });
});
  

// Listar compras
router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM compra';
    connection.query(sql, (error, results, fields) => {
        if (error) {
        console.error('Erro ao buscar compras: ', error);
        res.status(500).send('Erro ao buscar compras.');
        return;
        }
        res.json(results);
    });
});
  

// Buscar compra por ID
router.get('/:id', async (req, res) => {
    const sql = 'SELECT * FROM compra WHERE id_compra=?';
    connection.query(sql, [req.params.id], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar compra: ', error);
            res.status(500).send('Erro ao buscar compra.');
            return;
        }
        res.json(results);
    });
});

// Atualizar compra:
router.put('/:id', async (req, res) => {
    const sql = 'UPDATE compra SET ? WHERE id_compra=?';
    connection.query(
        sql,
        [req.body, req.params.id],
        (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar compra: ', error);
            res.status(500).send('Erro ao atualizar compra.');
            return;
        }
        res.json(results);
        }
    );
});

