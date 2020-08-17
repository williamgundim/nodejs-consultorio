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
                    
        //avaliacao-page-one
        const sqlOne = 'CREATE TABLE IF NOT EXISTS AVLC_ONE (' +
                       'ID_AVLC int NOT NULL AUTO_INCREMENT, ' +
                       'ID_PATIENT integer,' +
                       'ANOMARCA date,' +
                       'NUMEROGPA integer,'+
                       'QNTOTEMPO varchar(100),'+
                       'PARTO varchar(100),'+
                       'CICLOMENSTRUAL integer,'+
                       'DTMENSTRUAL date,'+
                       'CONTRACEPTIVO integer,'+
                       'ANTICONCEPCIONAL varchar(100),'+
                       'DIU integer,'+
                       'NOMEDIU varchar(100),'+
                       'ENGRAVIDAR integer,'+
                       'STATUSGESTANTE integer,'+
                       'HORMONAL integer,' +
                       'NOMEHORMONAL varchar(100),'+
                       'DISTURBIO_HORMONAL varchar(100),'+
                       'CONTROLADO integer,' +
                       'NOME_CONTROLADO varchar(100),'+
                       'ORTOMOLECULAR integer,' +
                       'NOME_ORTOMOLECULAR varchar(100),'+
                       'EMAGRECEDOR integer,'+
                       'NOME_EMAGRECEDOR varchar(100),'+
                       'SUPLEMENTOS integer,'+
                       'NOME_SUPLEMENTOS varchar(100),'+
                       'PRIMARY KEY (ID_AVLC))' 
        
        //avaliacao-page-three
        const sqlThree = 'CREATE TABLE IF NOT EXISTS AVLC_THREE (' +
                         'ID_DOENCA varchar(2),' +
                         'ID_PATIENT integer,'+
                         'PRIMARY KEY (ID_DOENCA, ID_PATIENT))'

        this.connection.query(sql, (error)=>{
            if (error) {
                console.log(error);
            }            
        });

        this.connection.query(sqlOne, (error)=>{
            if (error) {
                console.log(error);
            }            
        });

        this.connection.query(sqlThree, (error)=>{
            if (error) {
                console.log(error);
            }            
        });

    }

}

module.exports = new Tables;