const express = require('express');
const supertest = require('supertest');
const { NextApiRequest, NextApiResponse } = require('next');


// Crie uma instância do Express para simular as requisições HTTP
const app = express();
app.use(express.json());


describe('API Test', () => {
    it('should create a new user', async () => {
        const response = await supertest(app)
            .post('/')
            .send({
                cpf: '123456789',
                nome: 'John Doe',
                senha: 'password',
                data_nascimento: '1990-01-01',
                tipo: 'regular',
                email: 'john.doe@example.com',
                telefone: '1234567890',
                cep: '12345-678',
                rua: 'Main Street',
                numero: '123',
                complemento: 'Apartment 1',
                cidade: 'New York',
                estado: 'NY',
            });

        expect(response.status).toBe(200);
        // Adicione mais asserções conforme necessário
    });

    it('should get all users', async () => {
        const response = await supertest(app).get('/');

        expect(response.status).toBe(200);
        // Adicione mais asserções conforme necessário
    });

    it('should create a new banishment', async () => {
        const response = await supertest(app)
            .post('/')
            .send({
                id_usuario: 1,
                motivo: 'Comportamento inadequado',
            });

        expect(response.status).toBe(200);
        // Adicione mais asserções conforme necessário
    });

    it('should get all banishments', async () => {
        const response = await supertest(app).get('/');

        expect(response.status).toBe(200);
        // Adicione mais asserções conforme necessário
    });
    it('should create a new event', async () => {
        const response = await supertest(app)
            .post('/')
            .send({
                id_usuario: '998',
                nome: 'Evento Teste',
                dataEvento: '2023-06-12',
                descricao: 'Descrição do evento teste',
                ativado: '1',
                imagem: {
                    data: '...',
                },
                horarioEvento: '12:00',
                setor_vip: 'Setor VIP',
                qnt_vip: 100,
                preco_vip: 100,
                cep: '12345-678',
                rua: 'Rua do Evento',
                numero: '123',
                complemento: 'Complemento do Evento',
                cidade: 'Cidade do Evento',
                estado: 'Estado do Evento',
            });

        expect(response.status).toBe(200);
        // Adicione mais asserções conforme necessário
    });

    it('should get all events', async () => {
        const response = await supertest(app).get('/');

        expect(response.status).toBe(200);
        // Adicione mais asserções conforme necessário
    });
});
