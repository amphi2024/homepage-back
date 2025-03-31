const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require("path");
const streamFile = require("./streamFile");

router.get('/latest', (req, res) => {

    const filename = "server-1.1.0.jar";
    streamFile(res,filename, path.join(__dirname, 'files', "servers", filename));

});

router.get('/:filename', (req, res) => {

        const filename = req.params.filename;

        streamFile(res, filename, path.join(__dirname, 'files', "servers" , filename));

});

module.exports = router;