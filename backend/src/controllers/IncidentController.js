const connection = require('../database/connection');

module.exports = {

    async index(request,response){
        const { page = 1 } = request.query; 
        const [count] = await connection('incidents').count();

        console.log(count);

        const incidents = await  connection('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);

        response.header('X-Total-Count',count['count(*)']);
        return response.json(incidents);
    },

    async create(request,response){
        const {title, description, value} = request.body;
        request.headers;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({id});
    },
    async delete(request,response){
        // pego meu id peos parâmetros recebidos
        const {id}= request.params;
        const ong_id = request.headers.authorization;

        //verifico se meu Id recebido nos parâmetros realmente existe atarvés do select na tabela
        //verifica se o id retornado é igual da ong id autorizada, autenticada no sistema.
        //se não for lança um retorno de erro 401, de operação nãopermitida.
        const incident = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();

        if(incident.ong_id != ong_id){
            return  response.status(401).json({ error: 'Operation not permitted.'});
        }
        // se não entrarna condição acima, ele deleta o incidente quea ong quer.
        await connection('incidents').where('id',id).delete();

        // retorna uma resposta sem conteudo.
        return response.status(204).send();

    }
};