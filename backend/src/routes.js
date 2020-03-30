const express = require("express");
const { celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post("/sessions", sessionController.create)

///Listagem das Ongs
routes.get('/ongs', OngController.index)
///Cadastro das Ongs
routes.post("/ongs", celebrate({
   [Segments.BODY]:Joi.object().keys({
       name: Joi.string().required(),
       email: Joi.string().required().email(),
       whatsapp: Joi.string().required().min(10).max(11),
       city: Joi.string().required(),
       uf: Joi.string().required().length(2),
   }) 
}),OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}) ,ProfileController.index);

//Cadastro para incidents
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index)
routes.post('/incidents', IncidentController.create)

//deletar
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete)

module.exports = routes;