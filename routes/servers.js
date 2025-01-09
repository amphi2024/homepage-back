const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require("node:path");

router.get('/:filename', (req, res) => {

        const filename = req.params.filename;

        const filePath = path.join(__dirname, 'files', "servers" , filename);

        console.log('Resolved file path:', filePath);

        // 파일 스트리밍 다운로드
        const readStream = fs.createReadStream(filePath);
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        readStream.pipe(res);

        readStream.on('error', (err) => {
            console.error('File streaming error:', err);
            res.status(500).send('Error streaming the file');
        });

});

module.exports = router;