const connection = require('../infra/connection');

class ModelAvlcOne{
    
    /**
     * create new item
     * @param {*} patient 
     * @param {*} response 
     */
    createItem(patient, response){

        const sql = 'INSERT INTO AVLC_ONE SET ?'

        connection.query(sql, patient, (error, result)=>{

            if (error){
                response.status(400).json(error) //bad request
            }else{
                response.status(201).json(result) //create
            }

        })

    }

    updateItem(patient, id, response){

        const sql = 'UPDATE AVLC_ONE SET ? WHERE ID = ' + id;
        
        connection.query(sql, patient, (error, result) =>{

            if (error){
                response.status(400).json(error) //bad request
            }else{
                response.status(201).json(result) //create
            }

        });


    }


    /**
     * getItems()
     */
    getItems(response){

        const sql = 'SELECT * FROM AVLC_ONE'

        connection.query(sql, (error, result, fields)=>{

            let oJson = {};
            let aArray = [];
            let x = 0;

            if (error){
                response.status(400).json(error) //bad request.
            }else{
                
                for (x = 0; x < result.length; x++){                 
                    aArray.push( result[x] );
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

        const sql = `SELECT * FROM AVLC_ONE WHERE ID_PATIENT = ${id} `;

        connection.query(sql, (error, results, fields)=>{

            if (error){
                response.status(400).json(error) //bad request.
            }else{
                response.status(200).json(results[0])// ok.
            }

        })

    }
}

module.exports = new ModelAvlcOne;