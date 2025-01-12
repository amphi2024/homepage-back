const fs = require('fs');

function streamFile(res, filename, filePath) {

    const readStream = fs.createReadStream(filePath);
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    readStream.pipe(res);

    readStream.on('error', (err) => {
        console.error('File streaming error:', err);
        res.status(500).send('Error streaming the file');
    });
}

module.exports = streamFile;