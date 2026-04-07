const { spec, handler } = require('pactum');


const { URL_BASE } = require('../config'); 

describe('Módulo 24 - Testes de API de Categorias', () => {

    it('Deve validar se a API está online (mesmo sem token)', async () => {
        await spec()
            .get(`${URL_BASE}/categories`)
            .expectStatus(403); 
    });
    

});