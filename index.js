const customExpress = require('./config/customExpress');
const connection = require('./infra/connection');
const Tables = require('./infra/tables');

connection.connect((error)=>{
    
    if(error){
        console.log(error)
    }else{

        Tables.init(connection);
        const app = customExpress();
        app.listen(3000, ()=> console.log('servidor iniciado')); //porta
           
    }

});