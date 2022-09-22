var express = require('express');
var router = express.Router();
const {doSignup, doLogin,insertForm} = require('../Helpers/userHelper')





/* GET users listing. */


router.get('/', function (req, res, next) {

  res.send('server   gfsagsfasfahgfsas')
});

router.post('/signup',doSignup )

router.post('/login', doLogin)



router.post('/formsubmit',insertForm)



module.exports = router;
