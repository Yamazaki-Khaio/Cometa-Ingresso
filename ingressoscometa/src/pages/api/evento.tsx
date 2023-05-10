import express from 'express';
import {connection} from './db';
import Evento from './classes/Evento';
 
const router = express.Router();

// Criar evento
router.post('/', async (req, res) => {
    const evento = new Evento(
        req.body.id_evento,
        req.body.nome_evento,
        req.body.data_evento,
        req.body.descricao_evento,
        req.body.id_local_evento,
        req.body.cpf_cnpj_promoter,
        req.body.UsuarioID,
        //req.body.idSetor,
        //req.body.idTipo
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
});
