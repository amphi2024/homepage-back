const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require("path");

router.get('/latest', (req, res) => {

    const filename = "server-1.0.0.jar";
    streamFile(res,filename, path.join(__dirname, 'files', "servers", filename));

});

router.get('/:filename', (req, res) => {

        const filename = req.params.filename;

        streamFile(res, filename, path.join(__dirname, 'files', "servers" , filename));

});

function streamFile(res, filename, filePath) {

    const readStream = fs.createReadStream(filePath);
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    readStream.pipe(res);

    readStream.on('error', (err) => {
        console.error('File streaming error:', err);
        res.status(500).send('Error streaming the file');
    });
}

module.exports = router;