
const model = require('../models/model-patient');
const connection = require('../infra/connection');

module.exports = app => {
        
    /**
     * Rota para retornar os pacientes
     */
    app.get('/pacientes', (request, response)=> {

        model.getItems(response);

    });

    /**
     * Rota para retornar um paciente especifico.
     */
    app.get('/pacientes/:id', (request, response) => {
        
        let idValue = parseInt(request.params.id); 
        model.getOne(idValue,response);

    })


    /**
     * Rota para cadastrar um novo paciente
     */
    app.post('/pacientes', (req, res) => {
        
        const value = req.body;
        model.createItem(value, res);

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