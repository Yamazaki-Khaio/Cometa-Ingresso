import express from 'express';
import {connection} from './db';
import Usuario from './classes/Usuario';

const router = express.Router();

// Criar usuário
router.post('/', async (req, res) => {
    const usuario = new Usuario(
        req.body.idUser,
        req.body.cpf,
        req.body.nome,
        req.body.senha,
        req.body.data_nascimento,
        req.body.tipo_user,
        req.body.email,
        req.body.endereco
    );
    const sql = 'INSERT INTO usuario SET ?';
    connection.query(sql, usuario, (error, results, fields) => {
        if (error) {
        console.error('Erro ao inserir novo usuário: ', error);
        res.status(500).send('Erro ao inserir novo usuário.');
        return;
        }
        res.json(results);
    });
});
  

// Listar usuários
router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM usuario';
    connection.query(sql, (error, results, fields) => {
        if (error) {
        console.error('Erro ao buscar usuários: ', error);
        res.status(500).send('Erro ao buscar usuários.');
        return;
        }
        res.json(results);
    });
});
  

// Buscar usuário por ID
router.get('/:id', async (req, res) => {
    const sql = 'SELECT * FROM usuario WHERE idUser=?';
    connection.query(sql, [req.params.id], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar usuário: ', error);
            res.status(500).send('Erro ao buscar usuário.');
            return;
        }
        res.json(results);
    });
});

// Atualizar usuário:
router.put('/:id', async (req, res) => {
    const sql = 'UPDATE usuario SET ? WHERE idUser=?';
    connection.query(
        sql,
        [req.body, req.params.id],
        (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar usuário: ', error);
            res.status(500).send('Erro ao atualizar usuário.');
            return;
        }
        res.json(results);
        }
    );
});

