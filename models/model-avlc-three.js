const connection = require('../infra/connection');

class ModelAvlcThree{
    
    /**
     * create new item
     * @param {*} body - requisição. 
     * @param {*} response 
     */
    createItem(body, response){

        const idPaciente = parseInt(body.IDPACIENTE);
        const listItems = body.LISTID;

        this.deleteItems(idPaciente)
            .then(
                    this.insertItems(idPaciente,listItems)
                        .then(  response.status(200).json('ok'))
                        .catch( response.status(400).json('bad request')));

    }

    deleteItems(idPaciente){
        let sqlDelete = `DELETE FROM AVLC_THREE WHERE ID_PATIENT = ${idPaciente}`
        
        const promisse = new Promise((resolve, project) => {

            connection.query(sqlDelete, (error, RESULT)=>{        
            })

            resolve('ok');
        
        });

        return promisse
        
    }

    insertItems(idPaciente, listItems){
        let sql = ''
        const promisse = new Promise( (resolve, project) =>{

            listItems.forEach( item => {
            
                sql = `INSERT INTO AVLC_THREE (ID_PATIENT, ID_DOENCA) VALUES (${idPaciente},?)`;
                
                connection.query(sql, item, (error, RESULT)=>{        
                })
    
            });

            resolve('ok');

        })

        return promisse
    }

/**
     * getItems()
     */
    getItems(idPaciente, response){

        const sql = `SELECT ID_DOENCA FROM AVLC_THREE WHERE ID_PATIENT = ${idPaciente}`

        connection.query(sql, (error, RESULT) => {

            let oJson = {};
            let aList = [];
            let x = 0;

            if (error){
                response.status(400).json(error) //bad request.
            }else{
                
                for (x = 0; x < RESULT.length; x++){                 
                    aList.push( RESULT[x].ID_DOENCA );
                }

                oJson = {
                    'IDPACIENTE':idPaciente,
                    'LISTID': aList,
                }

                response.status(200).json(oJson);
            }


        })

    }

}

module.exports = new ModelAvlcThree;