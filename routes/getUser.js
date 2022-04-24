const express = require('express');
const router = express.Router();    

router.get('/', (req, res) => {
    if(req.session.user)
        res.send(req.session.user);
    else
        res.sendStatus(401);
});

module.exports = router;