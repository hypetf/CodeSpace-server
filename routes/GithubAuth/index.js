const express = require('express');
const router = express.Router();    

router.get('/github', (req, res) => {
    res.send("github auth");
});

module.exports = router;