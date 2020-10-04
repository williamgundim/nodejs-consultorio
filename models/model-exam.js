const connection = require('../infra/connection');

const leucogramaMan = require('./mock/exam-man/leucograma-mock');
const hemogramaMan = require('./mock/exam-man/hemograma-mock');
const tireoideMan = require('./mock/exam-man/tireoide-mock');
const glicemiaMan = require('./mock/exam-man/glicemia-mock');
const lipidogramaMan = require('./mock/exam-man/lipidograma-mock');
const estresseMan = require('./mock/exam-man/estresse-mock');

const leucogramaWoman = require('./mock/exam-woman/leucograma-mock');
const hemogramaWoman = require('./mock/exam-woman/hemograma-mock');
const tireoideWoman = require('./mock/exam-woman/tireoide-mock');
const glicemiaWoman = require('./mock/exam-woman/glicemia-mock');
const lipidogramaWoman = require('./mock/exam-woman/lipidograma-mock');
const estresseWoman = require('./mock/exam-woman/estresse-mock');

const { response } = require('express');


class ModelExam{
    
        /**
     * getItems()
     */
    getItems(idPaciente, type, response){

        const sql = `SELECT DESCRIPTION, PARAMETERS, NOTES, RESULT FROM EXAMS 
                    WHERE ID_PATIENT = ${idPaciente} AND TYPE = ${type}`

        connection.query(sql, (error, RESULT) => {

            let oJson = {};
            let aList = [];
            let x = 0;

            if (error){
                response.status(400).json(error) //bad request.
            }else{
                
                if (RESULT.length <= 0) {
                    
                    oJson = {
                        'ID_PATIENT':idPaciente,
                        'TYPE':type,
                        'ITEMS': this.getModel(type) 
                    }
                    response.status(200).json(oJson);
                }
                else
                {
                
                    for (x = 0; x < RESULT.length; x++){                 
                        aList.push( RESULT[x] );
                    }

                    oJson = {
                        'ID_PATIENT':idPaciente,
                        'TYPE':type,
                        'ITEMS': aList,
                    }

                    response.status(200).json(oJson);
                }

            }
        })

    }

    getModel(type){
        
        switch (type) {
            case 1:
                return hemogramaMan.getModel();
            case 2:
                return leucogramaMan.getModel();
            case 3:
                return tireoideMan.getModel();
            case 4:
                return glicemiaMan.getModel();
            case 5:
                return lipidogramaMan.getModel();
            case 6:
                return estresseMan.getModel();
        }        
        
    }

    /**
     * create new item
     * @param {*} patient 
     * @param {*} response 
     */
    createItem(body, type, response){

        const idPaciente = body.ID_PATIENT;

        this.deleteItems(idPaciente)
            .then(
                    this.insertItems(idPaciente, type, body.ITEMS)
                        .then(  response.status(200).json('ok'))
                        .catch( response.status(400).json('bad request')))
            .catch();

    }


    insertItems(idPaciente, type, listItems){
        let sql = ''
        const promisse = new Promise( (resolve, project) =>{

            listItems.forEach( item => {
            
                sql = 'INSERT INTO EXAMS (ID_PATIENT, TYPE, DESCRIPTION, PARAMETERS, NOTES, RESULT)' + 
                      'VALUES (' + idPaciente + ',' +
                      type + ',' + 
                      '"' + item.DESCRIPTION + '",' +
                      '"' + item.PARAMETERS + '",' +
                      '"' + item.NOTES + '",' +
                      '"' + item.RESULT + '")'
                
                connection.query(sql, item, (error, RESULT)=>{ 
                    
                    if (error) {
                        console.log(error);
                    }  
                    
                })
    
            });

            resolve('ok');

        })

        return promisse
    }

    deleteItems(idPaciente){
        let sqlDelete = `DELETE FROM EXAMS WHERE ID_PATIENT = ${idPaciente} AND TYPE = ${1}`
        
        const promisse = new Promise((resolve, reject) => {

            connection.query(sqlDelete, (error, RESULT)=>{});

            resolve('ok')
        
        });

        return promisse
        
    }



}

module.exports = new ModelExam;