var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function(req, res, next) {
  res.render('pages/contacto-em', { title: 'Contacto' });
});

module.exports = router;