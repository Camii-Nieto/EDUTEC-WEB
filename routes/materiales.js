var express = require('express');
var router = express.Router();
const data = require('../utils/data');
const categories = require('../utils/categories');
const slidesMe = require('../utils/slidesMe');

/* GET materiales page. */
router.get('/', function(req, res, next) {
  data.getAllProducts((error, data)=>{
    if(error){
        return res.send({
            error
        })
    }
    const JSONBody = JSON.parse(data);
    return res.render('pages/materiales', {
        title: "EDUTEC Materiales electricos",
        categories,
        slidesMe,
        JSONBody
    });

})
});

module.exports = router;