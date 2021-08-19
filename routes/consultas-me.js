var express = require('express');
var router = express.Router();

/* GET consultas page. */
router.get('/', function(req, res, next) {
  res.render('pages/consultas-me', { title: 'Consultas' });
});

module.exports = router;