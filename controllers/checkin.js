const model = require('../models/model-checkin');

module.exports = app => {
        
    /**
     * Rota para cadastrar/retornar os valores da terceira pagina da avaliação.
     */

    app.get('/checkin/:id', (request, response)=> {

        const idPaciente = request.params.id;

        model.getItems(idPaciente, response);

    });

    app.post('/checkin', (req, res) => {
        
        const value = req.body;

        model.createItem(value, res);

    });

} 