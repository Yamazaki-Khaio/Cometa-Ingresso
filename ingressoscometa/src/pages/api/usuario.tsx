import express from 'express';
import {connection} from './db';
import Usuario from './classes/Usuario';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest,res: NextApiResponse){
    //caso o metodo usado seja GET
    if(req.method === 'GET'){
        //listando usuarios
        if(!req.query){
            const sql = 'SELECT * FROM usuario';
            connection.query(sql, (error, results, fields) => {
                if (error) {
                console.error('Erro ao buscar usuários: ', error);
                res.status(500).send('Erro ao buscar usuários.');
                return;
                }
                res.json(results);
                return;
            });
      
        }else{
            //bbuscando usuario por cpf
            if(req.query['cpf']){
                const sql = 'SELECT * FROM usuario WHERE cpf=?';
                connection.query(sql,[req.query['cpf']], (error, results, fields) => {
                    if (error) {
                    console.error('Erro ao buscar usuários: ', error);
                    res.status(500).send('Erro ao buscar usuários.');
                    return;
                    }
                    res.json(results);
                    return;
                });
                
            }
        }
    }
    //cadastro de usuario
    if(req.method === 'POST'){
    
        const sql = 'INSERT INTO usuario(cpf,cnpj,nome,senha,data_nascimento,tipo_user) VALUES ('+
        req.body.cpf+
        
        ",'00000000000000'"
        +','
        +"'"+
        req.body.nome+"'"+','
        +"'"+
        req.body.senha+"'"+
        ','+
        "'"+
        req.body.data_nascimento+
        "'"+
        ','+
        req.body.tipo_user+')';

        connection.query(sql, (error, results, fields) => {
            if (error) {
            console.error('Erro ao inserir novo usuário: ', error);
            res.status(500).send('Erro ao inserir novo usuário.');
            return;
            }
            res.status(200).send('ok')
            return;
        });

        
    }

}

const router = express.Router();

// Criar usuário
router.post('/cadastro', async (req, res) => {
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
//fim da rotas de usuario

