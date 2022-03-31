const express = require('express');
const router = express.Router();
const testRoute = require('./test');

router.use('/v1', testRoute);

module.exports = router;