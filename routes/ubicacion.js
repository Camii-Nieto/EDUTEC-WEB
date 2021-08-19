var express = require('express');
var router = express.Router();

/* GET ubication page. */
router.get('/', function(req, res, next) {
  res.render('pages/ubicacion', { title: '¿Donde estamos?' });
});

module.exports = router;