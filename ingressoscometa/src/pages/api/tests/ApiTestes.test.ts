/*const axios = require('axios');

describe('Rota API', () => {
    const baseURL = 'http://localhost:3000/api/usuario';

    it('should create a new user', async () => {
        const response = await axios.post(baseURL, {
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
        const response = await axios.get(baseURL);

        expect(response.status).toBe(200);
        // Adicione mais asserções conforme necessário
    });

    it('should delete a user', async () => {
        const response = await axios.delete(baseURL, {
            data: {
                idUser: 1,
            },
        });

        expect(response.status).toBe(200);
        // Adicione mais asserções conforme necessário
    });

    it('should update a user password', async () => {
        const response = await axios.put(`${baseURL}?id=1`, {
            senha: 'newpassword',
        });

        expect(response.status).toBe(200);
        // Adicione mais asserções conforme necessário
    });
});
*/