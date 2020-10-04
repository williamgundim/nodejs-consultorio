const connection = require('../infra/connection');

class ModelPatients{
    
    /**
     * create new item
     * @param {*} patient 
     * @param {*} response 
     */
    createItem(patient, response){

        const sql = 'INSERT INTO PATIENTS SET ?'

        connection.query(sql, patient, (error, RESULT)=>{

            if (error){
                response.status(400).json(error) //bad request
            }else{
                response.status(201).json(RESULT) //create
            }

        })

    }

    updateItem(patient, id, response){

        const sql = 'UPDATE PATIENTS SET ? WHERE ID = ' + id;
        
        connection.query(sql, patient, (error, RESULT) =>{

            if (error){
                response.status(400).json(error) //bad request
            }else{
                response.status(201).json(RESULT) //create
            }

        });


    }


    /**
     * getItems()
     */
    getItems(response){

        const sql = 'SELECT * FROM PATIENTS'

        connection.query(sql, (error, RESULT, fields)=>{

            let oJson = {};
            let aArray = [];
            let x = 0;

            if (error){
                response.status(400).json(error) //bad request.
            }else{
                
                for (x = 0; x < RESULT.length; x++){                 
                    aArray.push( RESULT[x] );
                }

                oJson = {
                    'items': aArray,
                    'hasNext': false
                }

                response.status(200).json(oJson);
            }


        })

    }

    /**
     * Retorna apenas um item para a API.
     * @param {*} id 
     */
    getOne(id, response){

        const sql = `SELECT * FROM PATIENTS WHERE ID = ${id} `;

        connection.query(sql, (error, RESULTs, fields)=>{

            if (error){
                response.status(400).json(error) //bad request.
            }else{
                response.status(200).json(RESULTs[0])// ok.
            }

        })

    }
}

module.exports = new ModelPatients;