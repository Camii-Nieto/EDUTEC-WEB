var express = require('express');
var router = express.Router();
const data  = require('../utils/data');
const slidesEm = require('../utils/slidesEm')

/* GET matriculado page. */
router.get('/', function(req, res, next) {
  data.getAllServices((error, data)=>{
    if(error){
        return res.send({
            error
        })
    }
    const JSONBody = JSON.parse(data);
    return res.render('pages/matriculado', {
        title: "EDUTEC Electricista maticulado",
        slidesEm,
        JSONBody
    });

})
});

module.exports = router;