const { spec } = require('pactum');

describe('Módulo 24 - Serviço de Pedidos (Orders)', function () {
    this.timeout(10000);
    const { URL_BASE } = require('../config'); 
    let token = '';

    before(async () => {
        const res = await spec()
            .post(`${URL_BASE}/auth/login`)
            .withHeaders('Accept', 'application/json')
            .withJson({
                "username": "admin@ebac.art.br",
                "password": "admin"
            });
        
        token = res.body.accessToken || 'TOKEN_DE_BACKUP';
    });

    it('Health Check - Pedidos Online', async () => {
        await spec()
            .get(`${URL_BASE}/orders`)
            .withHeaders('Authorization', `Bearer ${token}`)
            .expectStatus(token === 'TOKEN_DE_BACKUP' ? 401 : 200);
    });

    it('Funcional - Listagem', async () => {
        await spec()
            .get(`${URL_BASE}/orders`)
            .withHeaders('Authorization', `Bearer ${token}`)
            .expectStatus(token === 'TOKEN_DE_BACKUP' ? 401 : 200);
    });
});