
const model = require('../models/model-exam');
const connection = require('../infra/connection');

module.exports = app => {
        
    /**
     * Rota para retornar o modelo para inclusao de exames
     */
    app.get('/modelhemograma', (request, response)=> {

        model.getHemograma(response);

    });

} 