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
                const sql = 'SELECT c.id, s.preco, e.nome_evento, e.data_evento, s.nome, l.cidade, e.imagem FROM usuario u, ingresso i, carrinho c, setor s, endereco l, evento e WHERE e.id = i.id_evento AND s.id = i.id_setor AND l.id_evento = e.id AND i.id_carrinho = c.id AND u.id=?;                ';
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
            console.log("entrou no POST")
            const sql = 'INSERT INTO carrinho (id_usuario)  VALUES (?)'
            
            
            const params = [
                req.body.id_usuario,
            ]

            connection.query(sql, params, (error, results, fields) => {
                if (error) {
                        console.error('Erro ao inserir novo carrinho de compras: ', error);
                        res.status(500).send('Erro ao inserir novo carrinho de compras.');
                    return;
                }
                const idCarrinho = results.insertId; // Obtém o ID do usuário recém-inserido
                console.log(idCarrinho)
                

            console.log(idCarrinho + "ESSE SERIA O ID DE CARRINHO?")

            const ingressoSql = 'INSERT INTO ingresso (id_evento, id_setor, max_ingresso, preco_ingresso, id_carrinho)  VALUES (?,?,?,?,?)'
           
            const ingressosparam = [
                req.body.id_evento,
                req.body.id_setor,
                req.body.max_ingresso,
                req.body.preco_ingresso,
                idCarrinho
            ]

            connection.query(ingressoSql, ingressosparam, (error, results, fields) => {
                if (error) {
                        console.error('Erro ao inserir novo ingresso: ', error);
                        res.status(500).send('Erro ao inserir novo ingresso.');
                    return;
                }
            res.json(results);
        });
        res.json(results);
    });
            

        }else if (req.method === "DELETE") {
            console.log("entrou aquiiiiiiiiiiiiiiiiiiiiiiiiiiii")
            if (!req.query.id) {
              res.status(400).send("ID do item de carrinho não fornecido.");
              return;
            }
        
            const itemId = Number(req.query['id']);
        
            const sql = "DELETE i FROM usuario u JOIN ingresso i ON u.id = i.id_carrinho JOIN carrinho c ON i.id_carrinho= c.id JOIN setor s ON i.id_setor = s.id JOIN endereco l ON l.id_evento = i.id_evento JOIN evento e ON e.id = i.id_evento WHERE u.id = ?";
            connection.query(sql, [itemId], (error, results, fields) => {
              if (error) {
                console.error("Erro ao excluir item do carrinho: ", error);
                res.status(500).send("Erro ao excluir item do carrinho.");
                return;
              }
              res.json(results);
            });
            console.log(req.query['id'])
          }
}

