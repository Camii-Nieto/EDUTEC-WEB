var express = require('express');
var router = express.Router();
const selectServ = require('../utils/selectServ')

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('index', {
        title: "Bienvenidos a EDUTEC",
        selectServ
  });
});

module.exports = router;