
const model = require('../models/model-exam');
const connection = require('../infra/connection');

module.exports = app => {
        
    /**
     * Hemograma
     * Rota para retornar o modelo para inclusao de exames
     */
    app.get('/exames/modelhemograma/:id', (request, response)=> {
        model.getItems(request.params.id,1,response);
    });

    app.post('/exames/modelhemograma', (request, response)=>{
        const value = request.body;
        model.createItem(value, 1, response);
    })

    /**
     * Leucogramma
     * Rota para retornar o modelo para inclusao de exames
     */
    app.get('/exames/modelleucograma/:id', (request, response)=> {
        model.getItems(request.params.id,2,response);
    });

    app.post('/exames/modelleucograma', (request, response)=>{
        const value = request.body;
        model.createItem(value, 2, response);
    })

    /**
     * Tireoide
    * Rota para retornar o modelo para inclusao de exames
    */
    app.get('/exames/modeltireoide/:id', (request, response)=> {
        model.getItems(request.params.id,3,response);
    });

    app.post('/exames/modeltireoide', (request, response)=>{
        const value = request.body;
        model.createItem(value, 3, response);
    })

    /**
     * Glicemia
    * Rota para retornar o modelo para inclusao de exames
    */
    app.get('/exames/modelglicemia/:id', (request, response)=> {
        model.getItems(request.params.id,4,response);
    });

    app.post('/exames/modelglicemia', (request, response)=>{
        const value = request.body;
        model.createItem(value, 4, response);
    })

    /**
     * Lipidograma
    * Rota para retornar o modelo para inclusao de exames
    */
    app.get('/exames/modellipidograma/:id', (request, response)=> {
        model.getItems(request.params.id,5,response); 
    });

    app.post('/exames/modellipidograma', (request, response)=>{
        const value = request.body;
        model.createItem(value, 5, response);
    })

   /**
    * Estresse
   * Rota para retornar o modelo para inclusao de exames
   */
    app.get('/exames/modelestresse', (request, response)=> {
        model.getItems(request.params.id,6,response);  

    app.post('/exames/modelestresse', (request, response)=>{
        const value = request.body;
        model.createItem(value, 6, response);
    })

});



} 