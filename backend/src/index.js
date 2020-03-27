// no arquivo package.json mudar a main do arquivo para inde.js
// no arquivo pakcge.json mudar o caminho para  a página que o nodemon deve startar no meu caso a index.js
// "scripts": {
    //"start": "nodemon src/index.js"
//},



// para startar um serviço deve-se baixar o nodemon primeiro npm install nodemon -d
// comando npm start iniciao nodemon
// comando ctrl + c para o nodemon

//para utilzarbanco de dados necesário baixar o knex
//para baixar npm install knex -d
//em seguida baixar o banco desejavel sqlite3
// npm install sqlite3 (td isso na página do knex em instalation)
// em seguida startar o driver knex com npm knex init

// após iniciar criar uma pasta database e outro migration
// mudar no arquivo knexfile.js os valores em development:
// development: {
/*client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault:true,
  },*/
  // e em seguida executar o comando npx knex migrate:make nomedaminhamigration + enter
  // no arquivo de database criado (2020003)criar as tabelas
  // em seguida executar o comando npx knex migrate:latest para criar o arquivo .db
  // em seguida para a criar a proxima migration é so dar o comando npx knex migrate:make create_incidents (nome da migrate)

  // após criar os migrations e controllers dar o comando
  // npm install cors esse modulo define quem vai poder acessar nossa aplicação. deve importar na index.




//importando as funcionalidades do pack (modulo) express
const express = require('express');
//importa o cors
const cors = require('cors');
// importando minhas rotas criadas no arquivo routes
const routes = require('./routes');


//instancia a variavél express na porta 333 pra acesnpmsar a porta da minha aplicação
const app = express();

//aponto uma rota no gest, como não tenho nenhum formulário, aponto a index mesmo apenas com /, e depois passo uma função como parâmetro
// a função é padrão da lib express (requisição, resposta).
//importante declarar  
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

