const express = require('express');
const router = express.Router();

router.get('/vedio1', (req, res) => {
    res.send('Response from vedio');
})

module.exports = router;