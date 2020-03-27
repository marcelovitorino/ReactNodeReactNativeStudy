const connection = require('../database/connection');

module.exports = {
    async index(request,response) {
        const { page = 1 } = request.query;

        const [count] = await connection('itens')
            .count();

        const itens = await connection('itens')
            .join('estabelecimentos','estabelecimentos.id','=','itens.estabelecimento_id')
            .select(['itens.*',
            'estabelecimentos.title',
            'estabelecimentos.whatsapp',
            'estabelecimentos.city',
            'estabelecimentos.categoria',
            'estabelecimentos.atendimento'])
            .limit(5)
            .offset((page - 1) * 5);

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(itens);
    },

    async create(request,response) {
        const { name, price } = request.body;
        const estabelecimento_id = request.headers.authorization;

        const [id] = await connection('itens').insert({
            name,
            price,
            estabelecimento_id 
        })

        return response.json( { id } );
    },

    async delete(request,response) {
        const { id } = request.params;
        const estabelecimento_id = request.headers.authorization;

        const item = await connection('itens').select('estabelecimento_id').where('id',id).first();

        if ( item.estabelecimento_id !== estabelecimento_id) {
            return response.status(401).json({error: 'Operation not permitted'});
        }

        await connection('itens').where('id',id).delete();

        return response.status(204).send();
    }
}