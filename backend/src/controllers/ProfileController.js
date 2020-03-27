const connection = require('../database/connection');

module.exports = {
    async index(request,response) {
        const estabelecimento_id = request.headers.authorization;

        const itens = await connection('itens').
            select('*')
            .where('estabelecimento_id',estabelecimento_id);
    
        return response.json(itens);
    }
}