import express from 'express';
import {connection} from './db';
import Evento from './classes/Evento';
import { NextApiRequest, NextApiResponse } from 'next';

const router = express.Router();

export default function handler(req: NextApiRequest,res: NextApiResponse){
    res.status(200).json({ message: 'Vai dormir!' });
    if(req.method === 'GET'){
        if(!req.query){
            const sql = 'SELECT * FROM evento';
            connection.query(sql, (error, results, fields) => {
                if (error) {
                console.error('Erro ao buscar eventos: ', error);
                res.status(500).send('Erro ao buscar eventos.');
                return;
                }
                res.json(results);
            });
        }
        
        else{
            if(req.query['idEvento']){
                const sql = 'SELECT * FROM evento WHERE idEvento=?';
                connection.query(sql,[req.query['idEvento']], (error, results, fields) => {
                    if (error) {
                    console.error('Erro ao buscar eventos: ', error);
                    res.status(500).send('Erro ao buscar eventos.');
                    return;
                    }
                    res.json(results);
                });
            }
        }
    }
    if(req.method === 'POST'){
        res.status(200).json({ message: 'Vai dormir!' });
        const evento = new Evento(
            req.body.id,
            req.body.id_usuario,
            req.body.id_localidade,
            req.body.nome_evento,
            req.body.data_evento,
            req.body.descricao_evento,
            req.body.ativado,
            req.body.imagem
        );
            const sql = "INSERT into evento(id, id_usuario, id_localidade, nome_evento, data_evento, descricao_evento, ativado, imagem) VALUES("
        +
        '00000000000000'
        +','
        +"'"+
        '00000000000000'+"'"+','
        +"'"+
        req.body.id_local_evento+"'"+
        ','+
        "'"+
        req.body.nome_evento+
        "'"+
        ','+
        req.body.data_evento+
        "'"+
        ','+
        req.body.descricao_evento+
        "'"+
        ','+
        '0'+
        "'"+
        ','+
        ''+
        "'"+
        ','+')';
            connection.query(sql, evento, (error, results, fields) => {
                if (error) {
                console.error('Erro ao inserir novo evento', error);
                res.status(500).send('Erro ao inserir novo evento.');
                return;
                }
                res.json(results);
        });
    }
//}


// Criar evento
router.post('/', async (req, res) => {
    const evento = new Evento(
        req.body.id,
        req.body.id_usuario,
        req.body.id_localidade,
        req.body.nome_evento,
        req.body.data_evento,
        req.body.descricao_evento,
        req.body.ativado,
        req.body.imagem
    );
    const sql = 'INSERT INTO evento SET ?';
    connection.query(sql, evento, (error, results, fields) => {
        if (error) {
        console.error('Erro ao inserir novo evento: ', error);
        res.status(500).send('Erro ao inserir novo evento.');
        return;
        }
        res.json(results);
    });
});

// Listar eventos
router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM evento';
    connection.query(sql, (error, results, fields) => {
        if (error) {
        console.error('Erro ao buscar eventos: ', error);
        res.status(500).send('Erro ao buscar eventos.');
        return;
        }
        res.json(results);
    });
});

// Buscar evento por ID
router.get('/:id', async (req, res) => {
    const sql = 'SELECT * FROM evento WHERE idEvento=?';
    connection.query(sql, [req.params.id], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar evento: ', error);
            res.status(500).send('Erro ao buscar evento.');
            return;
        }
        res.json(results);
    });
});

// Atualizar evento:
router.put('/:id', async (req, res) => {
    const sql = 'UPDATE evento SET ? WHERE idEvento=?';
    connection.query(
        sql,
        [req.body, req.params.id],
        (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar evento: ', error);
            res.status(500).send('Erro ao atualizar evento.');
            return;
        }
        res.json(results);
        }
    );
})};
