const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/** 
*Rota/ Recurso
*/

/** Métodos HTTP:
*GET : Buscar/listar uma informação do beck-end
*POST: Criar uma informação no beck-end
*PUT: Alterar uma informação no beck-end
*DELETE: Deletar uma informação no beck-end
*/


/**Tipos de parâmetros
 * 
 * Query: parametros nomeados enviados na rota após "?" (filtros e paginação) --> const params = request.query
 * Route Params: Parâmetros utilizados para identificar recursos --> "/users/:id -->const params = request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos --> "/users/:id
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver : SELECT * FROM users
   * query Builder : table('user').select('*').where()
   */


module.exports = app;