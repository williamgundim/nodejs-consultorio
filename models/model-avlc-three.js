const connection = require('../infra/connection');

class ModelAvlcThree{
    
    /**
     * create new item
     * @param {*} body - requisição. 
     * @param {*} response 
     */
    createItem(body, response){

        const idPaciente = body.IDPACIENTE;
        const listItems = body.LISTID;
        let sql = '';
        let status = 0;

        listItems.forEach( item => {
            
            sql = `INSERT INTO AVLC_THREE (ID_PATIENT, ID_DOENCA) VALUES (${idPaciente},?)`;
            
            connection.query(sql,item, (error, result)=>{
    
                if (error){
                    status = 400;
                }else{
                    result = 201;
                }
    
            })

            response.status(status).json('');


        });

    }

}

module.exports = new ModelAvlcThree;