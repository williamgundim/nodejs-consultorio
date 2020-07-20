const connection = require('../infra/connection');

class ModelPatients{
    
    /**
     * create new item
     * @param {*} patient 
     * @param {*} response 
     */
    createItem(patient, response){

        const sql = 'INSERT INTO PATIENTS SET ?'

        connection.query(sql, patient, (error, result)=>{

            if (error){
                response.status(400).json(error) //bad request
            }else{
                response.status(201).json(result) //create
            }

        })

    }

    /**
     * getItems()
     */
    getItems(response){

        const sql = 'SELECT * FROM PATIENTS'

        connection.query(sql, (error, result, fields)=>{

            if (error){
                response.status(400).json(error) //bad request.
            }else{
                response.status(200).json(result)// ok.
            }

        })

    }

    /**
     * Retorna apenas um item para a API.
     * @param {*} id 
     */
    getOne(id, response){

        const sql = `SELECT * FROM PATIENTS WHERE ID = ${id} `;

        connection.query(sql, (error, results, fields)=>{

            if (error){
                response.status(400).json(error) //bad request.
            }else{
                response.status(200).json(results[0])// ok.
            }

        })

    }
}

module.exports = new ModelPatients;