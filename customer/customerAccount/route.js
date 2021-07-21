const {Router} = require('express');

let router = Router();

// path with function for routing
router.post('', require('./method/post'));

module.exports = router;
