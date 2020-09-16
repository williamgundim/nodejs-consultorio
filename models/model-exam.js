const connection = require('../infra/connection');

const modelHemograma = require('./mock/exam-man/hemograma-mock');
const modelLeucograma = require('./mock/exam-man/leucograma-mock');
const modelTireoide = require('./mock/exam-man/tireoide-mock');
const modelGlicemia = require('./mock/exam-man/glicemia-mock');
const modelLipidograma = require('./mock/exam-man/lipidograma-mock');
const modelEstresse = require('./mock/exam-man/estresse-mock');


class ModelExam{
    
    /**
     * Retorna o modelo padrão para cadastro de Hemograma
     * @param {*} response 
     */
    getHemograma(response){
        var model = modelHemograma.getModel();
        response.status(200).json(model);
    }

    /**
     * Retorna o modelo padrão para o cadastro de Leucograma
     * @param {*} response 
     */
    getLeucograma(response){
        var model = modelLeucograma.getModel();
        response.status(200).json(model);
    }

    /**
     * Retorna o modelo padrão para o cadastro de Tireoide
     * @param {*} response 
     */
    getTireoide(response){
        var model = modelTireoide.getModel();
        response.status(200).json(model);
    }

    /**
     * Retorna o modelo padrão
     * @param {*} response 
     */
    getGlicemia(response){
        var model = modelGlicemia.getModel();
        response.status(200).json(model);
    }

    /**
    * Retorna o modelo padrão
    * @param {*} response 
    */
    getLipidograma(response){
        var model = modelLipidograma.getModel();
        response.status(200).json(model);
    }

    /**
    * Retorna o modelo padrão
    * @param {*} response 
    */
    getEstresse(response){
        var model = modelEstresse.getModel();
        response.status(200).json(model);
    }

}

module.exports = new ModelExam;