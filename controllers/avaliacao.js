
const model = require('../models/model-avaliacao');
const connection = require('../infra/connection');

module.exports = app => {
        
    /**
     * Rota para cadastrar um novo paciente
     */
    app.post('/avaliacao', (req, res) => {
        
        const value = req.body;

        model.createItem(value, res);

    });


    app.put('/avaliacao/:id', (req, res) => {

        const value = req.body;
        const id = req.params.id;

        model.updateItem(value, id, res);


    });


    /**example json:
     * {
        "name":"william gundim",
        "address":"Rua Teste",
        "phone":"2222-2222",
        "birthday":"1992/07/07"
        "age":28,
        "cpf":"421.111.111-99",
        "rg":"41.198.429-9"    
    }
     */
} 