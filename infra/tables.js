/**
 * classe para criação das tabelas no banco de dados.
 */
class Tables{

    init(connection){
        this.connection = connection;

        this.createTable()

    }

    /**
     * method responsable to create table patients in to db
     */
    createTable(){
        const sql = 'CREATE TABLE IF NOT EXISTS PATIENTS (' + 
                    'ID int NOT NULL AUTO_INCREMENT,' + 
                    'NAME varchar(100) NOT NULL,' + 
                    'ADDRESS varchar(100),' +
                    'PHONE varchar(10),' +
                    'CELLPHONE varchar(15),' +
                    'AGE integer,' +
                    'BIRTHDAY date,' +
                    'OCCUPATION varchar(50),' +
                    'CPF varchar(20),'+
                    'RG varchar(20),'+
                    'STATUS integer,'+             
                    'PRIMARY KEY(ID))' 

        this.connection.query(sql, (error)=>{

            if (error) {
                console.log(error);
            }            

        });

    }

}

module.exports = new Tables;