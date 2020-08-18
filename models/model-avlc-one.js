const connection = require('../infra/connection');

class ModelAvlcOne{
    
    /**
     * create new item
     * @param {*} patient 
     * @param {*} response 
     */
    createItem(body, response){

        const idPaciente = parseInt(body.ID_PATIENT);

        this.deleteItems(idPaciente)
            .then(
                    this.insertItems(body)
                        .then(  response.status(200).json('ok'))
                        .catch( response.status(400).json('bad request')))
            .catch();

    }


    insertItems(body){
        const sql = 'INSERT INTO AVLC_ONE SET ?'

        const promisse = new Promise((resolve, reject) => {
            connection.query(sql, body, (error, result)=>{});

            resolve('ok');

        });
            
        return promisse

    }

    deleteItems(idPaciente){
        let sqlDelete = `DELETE FROM AVLC_ONE WHERE ID_PATIENT = ${idPaciente}`
        
        const promisse = new Promise((resolve, reject) => {

            connection.query(sqlDelete, (error, result)=>{});

            resolve('ok')
        
        });

        return promisse
        
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
    getItems(id, response){

        const sql = `SELECT * FROM AVLC_ONE WHERE ID_PATIENT = ${id}`

        connection.query(sql, (error, result, fields)=>{

        if (error){
            response.status(400).json(error) //bad request.
          }else{
                
            if (result.length > 0) {
                response.status(200).json(result[0]);
            }else{
                response.status(404).json('not found');
            }
               
        }})

    }

}

module.exports = new ModelAvlcOne;