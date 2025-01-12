const express = require('express');
const router = express.Router();
const path = require("path");
const streamFile = require("./streamFile");

router.get('/notes/:os/:arch/:type/:filename', (req, res) => {

    const os = req.params.os;
    const arch = req.params.arch;
    const type = req.params.type;
    const filename = req.params.filename;
    streamFile(res,filename, path.join(__dirname, 'files', "releases", "notes", os, arch , type, filename));

});
module.exports = router;