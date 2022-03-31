const express = require('express');
const router = express.Router();    

router.get('/test', (req, res) => {
    res.send("test route api");
});

module.exports = router;