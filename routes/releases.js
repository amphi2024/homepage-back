const express = require('express');
const router = express.Router();
const path = require("path");
const streamFile = require("./streamFile");

router.get('/:name/:os/:filename', (req, res) => {

    const name = req.params.name;
    const os = req.params.os;
    const filename = req.params.filename;
    streamFile(res,filename, path.join(__dirname, 'files', "releases", name, os, filename));

});

router.get('/:name/:os/:arch/:type/:filename', (req, res) => {
    const name = req.params.name;
    const os = req.params.os;
    const arch = req.params.arch;
    const type = req.params.type;
    const filename = req.params.filename;
    streamFile(res,filename, path.join(__dirname, 'files', "releases", name, os, arch , type, filename));

});

router.get('/:name/:os/:arch/:type/:version/:filename', (req, res) => {
    const name = req.params.name;
    const os = req.params.os;
    const arch = req.params.arch;
    const type = req.params.type;
    const version = req.params.version;
    const filename = req.params.filename;
    streamFile(res,filename, path.join(__dirname, 'files', "releases", name, os, arch , type, version , filename));

});

module.exports = router;