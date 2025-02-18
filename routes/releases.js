const express = require('express');
const router = express.Router();
const path = require("path");
const streamFile = require("./streamFile");

router.get('/:name/:filename', (req, res) => {

    const name = req.params.name;
    const filename = req.params.filename;
    streamFile(res,filename, path.join(__dirname, 'files', "releases", name, filename));

});

module.exports = router;