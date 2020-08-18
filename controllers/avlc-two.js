const model = require('../models/model-avlc-two');

module.exports = app => {
        
    /**
     * Rota para cadastrar/retornar os valores da terceira pagina da avaliação.
     */

    app.get('/avlctwo/:id', (request, response)=> {

        const idPaciente = request.params.id;

        model.getItems(idPaciente, response);

    });

    app.post('/avlctwo', (req, res) => {
        
        const value = req.body;

        model.createItem(value, res);

    });


    app.put('/avlctwo/:id', (req, res) => {

        const value = req.body;
        const id = req.params.id;

        model.updateItem(value, id, res);


    });


} 