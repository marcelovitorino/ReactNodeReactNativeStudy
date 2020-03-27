const connection = require('../database/connection');

module.exports = {
    async create(request,response) {
        const { id } = request.body;

        const estabelecimento = await connection('estabelecimentos')
            .select('title')
            .where('id',id)
            .first();

        if (!estabelecimento) {
            response.status(400).json({ 'error': 'No estabelecimento found with this ID.'});
        }
    
        return response.json(estabelecimento);
    }
}