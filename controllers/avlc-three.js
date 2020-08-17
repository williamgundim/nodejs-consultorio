const model = require('../models/model-avlc-three');

module.exports = app => {
        
    /**
     * Rota para cadastrar/retornar os valores da terceira pagina da avaliação.
     */
    app.post('/avlcthree', (req, res) => {
        
        const value = req.body;

        model.createItem(value, res);

    });


    app.put('/avlcthree/:id', (req, res) => {

        const value = req.body;
        const id = req.params.id;

        model.updateItem(value, id, res);


    });

    app.get('/avlcthree', (request, response)=> {

        model.getItems(response);

    });

} 