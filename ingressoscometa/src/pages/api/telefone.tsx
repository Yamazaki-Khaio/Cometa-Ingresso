import { NextApiRequest, NextApiResponse } from 'next';
import {connection} from './db';

export default function handler(req: NextApiRequest,res: NextApiResponse){
    //caso metodo get
    if(req.method==='GET'){
        //caso não haver paramentros
        if(!req.query){
            const sql = 'SELECT * FROM telefone'
            try{
                connection.query(sql, (error, results, fields) => {
                    res.status(200).send(results)
                    return
                })
            }catch(error){
                console.error('Erro ao buscar telefones: ', error);
                res.status(500).send('Erro ao buscar telefones.');
            }
          
        }else{
            //se não
            //busca por telefone
            if(req.query['telefone']){
                const sql = 'SELECT * FROM telefone WHERE telefone=?'
                try{
                    connection.query(sql,[req.query['telefone']], (error, results, fields) => {
                        res.status(200).send(results)
                        return;
                    })
                }catch(error){
                    console.error('Erro ao buscar telefones: ', error);
                    res.status(500).send('Erro ao buscar telefones.');
                }

            }

            // busca por id de telefone
            if(req.query['id']){
                try{
                    const sql = 'SELECT * FROM telefone WHERE id=?'
                    connection.query(sql,[req.query['id']], (error, results, fields) => {
                        res.status(200).send(results)
                        return;
                    })
                }catch(error){
                    console.error('Erro ao buscar telefones: ', error);
                    res.status(500).send('Erro ao buscar telefones.');
                }
            }
            //busca por id de celular 
            if(req.query['id_usuario']){
                try{
                    const sql = 'SELECT * FROM telefone WHERE id_usuario=?'
                    connection.query(sql,[req.query['id_usuario']], (error, results, fields) => {
                        res.status(200).send(results)
                        return;
                    })
                }catch(error){
                    console.error('Erro ao buscar telefones: ', error);
                    res.status(500).send('Erro ao buscar telefones.');
                }
            }
        }

    }

    if(req.method==='POST'){
        try{
            const data = req.query['id']+
            ','+
            req.query['id_usuario']+
            ','+
            req.query['telefone']+
            ')'
            const sql = 'INSERT INTO telefone(id,id_usuario,telefone) VALUES ('+data
            res.status(200).send({res:'ok'})
        }catch(error){
            res.status(500).send('Erro ao inserir telefones.');
        }
    }


    
}