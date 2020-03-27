const crypto = require ('crypto');

const connection = require('../database/connection');


module.exports = {

    async index(request,response) {
        const estabelecimentos = await connection('estabelecimentos').select('*');
    
        return response.json(estabelecimentos);
    },

    async create(request,response) {
        const { title, whatsapp, city, categoria, atendimento } = request.body;
        
        const id = crypto.randomBytes(4).toString("HEX");
    
        await connection('estabelecimentos').insert({
            id,
            title,
            whatsapp,
            city,
            categoria,
            atendimento
        })
    
        return response.json( { id } );
    }

}