const model = require('../models/model-avlc-three');

module.exports = app => {
        
    /**
     * Rota para cadastrar/retornar os valores da terceira pagina da avaliação.
     */

    app.get('/avlcthree/id', (request, response)=> {

        const idPaciente = request.params.id;

        model.getItems(idPaciente, response);

    });

    app.post('/avlcthree', (req, res) => {
        
        const value = req.body;

        model.createItem(value, res);

        console.log('teste');

    });


    app.put('/avlcthree/:id', (req, res) => {

        const value = req.body;
        const id = req.params.id;

        model.updateItem(value, id, res);


    });


} 