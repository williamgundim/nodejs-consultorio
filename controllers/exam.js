
const model = require('../models/model-exam');
const connection = require('../infra/connection');

module.exports = app => {
        
    /**
     * Rota para retornar o modelo para inclusao de exames
     */
    app.get('/modelhemograma', (request, response)=> {
        model.getHemograma(response);
    });

    /**
     * Rota para retornar o modelo para inclusao de exames
     */
    app.get('/modelleucograma', (request, response)=> {
        model.getLeucograma(response);
    });

    /**
    * Rota para retornar o modelo para inclusao de exames
    */
    app.get('/modeltireoide', (request, response)=> {
        model.getTireoide(response);
    });

    /**
    * Rota para retornar o modelo para inclusao de exames
    */
    app.get('/modelglicemia', (request, response)=> {
        model.getGlicemia(response);
    });

    /**
    * Rota para retornar o modelo para inclusao de exames
    */
   app.get('/modellipidograma', (request, response)=> {
        model.getLipidograma(response);  
   });

    /**
    * Rota para retornar o modelo para inclusao de exames
    */
   app.get('/modelestresse', (request, response)=> {
    model.getEstresse(response);  
});



} 