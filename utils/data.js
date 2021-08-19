const request = require('postman-request');

const getAllProducts = (callback) => {
    request('https://edutec-inc-app.herokuapp.com/products', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron productos.", undefined);
        }
    });
}

const getAllServices = (callback) => {
    request('https://edutec-inc-app.herokuapp.com/services', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron servicios.", undefined);
        }
    });
}

module.exports= {
 
  getAllProducts,
  getAllServices 

}