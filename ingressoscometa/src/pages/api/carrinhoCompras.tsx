import express from 'express';
import {connection} from './db';
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
                const sql = 'SELECT * FROM carrinho WHERE id_usuario=?';
                connection.query(sql,[req.query['id']], (error, results, fields) => {
                    if (error) {
                    console.error('Erro ao buscar carrinho: ', error);
                    res.status(500).send('Erro ao buscar carrinho.');
                    return;
                    }
                    res.json(results);
                    console.log(results)
                });
                
            }
        }
    }else if(req.method === 'POST'){

            const sql = 'INSERT INTO carrinho (id_usuario, id_setor, id_evento, quant_ingresso)  VALUES (?, ?, ?, ?)'

            const params = [
                req.body.id_usuario,
                req.body.id_setor,
                req.body.id_evento,
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

        }else if (req.method === "DELETE") {
            console.log("entrou aquiiiiiiiiiiiiiiiiiiiiiiiiiiii")
            if (!req.query.id) {
              res.status(400).send("ID do item de carrinho não fornecido.");
              return;
            }
        
            const itemId = Number(req.query.id);
        
            const sql = "DELETE FROM carrinho WHERE id = ?";
            connection.query(sql, [itemId], (error, results, fields) => {
              if (error) {
                console.error("Erro ao excluir item do carrinho: ", error);
                res.status(500).send("Erro ao excluir item do carrinho.");
                return;
              }
              res.json(results);
            });
          }
}

