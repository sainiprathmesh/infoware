const {Router} = require('express');

let router = Router();

router.get('', require('./method/get'));

module.exports = router;
