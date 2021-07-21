const {Router} = require('express');

let router = Router();

router.post('', require('./method/post'));

module.exports = router;

