const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    //Rotas de selecionar dados no banco
    async index (request,response){
        //declaro para aguardar resposta da função assincrona
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    
    },

    //metódo que cria os itens na tabela Ongs
    async create(request,response){
        const {name,email,whatsapp,city,uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        //declaro para aguardar resposta da função assincrona
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({id});
    }
};
