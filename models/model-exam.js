const connection = require('../infra/connection');
const modelExam = require('./mock/exam-man/hemograma-mock')


class ModelExam{
    
    /**
     * Retorna o modelo padrão para cadastro de Hemograma
     * @param {*} response 
     */
    getHemograma(response){
        var model = modelExam.getHemograma();
        response.status(200).json(model);
    }

}

module.exports = new ModelExam;