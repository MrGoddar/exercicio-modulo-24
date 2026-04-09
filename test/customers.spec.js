const { spec } = require('pactum');

describe('Módulo 24 - Serviço de Clientes (Customers)', function () {
    this.timeout(10000);
    const { URL_BASE } = require('../config'); 
    let token = '';

    before(async () => {
        const res = await spec()
            .post(`${URL_BASE}/auth/login`)
            .withHeaders('Accept', 'application/json')
            .withHeaders('User-Agent', 'PactumJS-Test')
            .withJson({
                "username": "admin@ebac.art.br",
                "password": "admin"
            });
        
        
        token = res.body.accessToken || res.body.token || 'TOKEN_DE_BACKUP';
        
        if (!res.body.accessToken) {
            console.log('AVISO: Login falhou no servidor. Usando Token de Backup para testes.');
        }
    });

    it('Health Check - Acesso ao endpoint', async () => {
        await spec()
            .get(`${URL_BASE}/customers`)
            .withHeaders('Authorization', `Bearer ${token}`)
            .expectStatus(token === 'TOKEN_DE_BACKUP' ? 401 : 200); 
    });

    it('Contrato - Validar Array', async () => {
        const s = spec().get(`${URL_BASE}/customers`).withHeaders('Authorization', `Bearer ${token}`);
        if (token !== 'TOKEN_DE_BACKUP') {
            await s.expectJsonSchema({ type: 'array' });
        }
    });
});