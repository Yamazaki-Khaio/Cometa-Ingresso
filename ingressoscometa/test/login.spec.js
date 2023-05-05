const Usuario = require('ingressoscometa/src/pages/api/classes/Usuario');
let crypto = require('crypto');
const { test } = require('node:test');
let senha = crypto.createHash('sha1').update('01234567').digest('hex');
let data = new Date();
const user = new Usuario(1, '99988877766', 'Marcos', senha, data, 1, "meu_email", "la em casa");

test('senha criptografada', () => {
    expect(user.login('99988877766', '01234567')).toBe(true);
});