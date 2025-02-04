const fs = require('fs');

function streamFile(res, filename, filePath) {

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error('File stat error:', err);
            res.status(500).send('Error retrieving file information');
            return;
        }

        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Accept-Ranges', 'bytes');
        res.setHeader('Content-Length', stats.size);

        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);

        readStream.on('error', (err) => {
            console.error('File streaming error:', err);
            res.status(500).send('Error streaming the file');
        });
    });
    // const readStream = fs.createReadStream(filePath);
    // res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    // readStream.pipe(res);
    //
    // readStream.on('error', (err) => {
    //     console.error('File streaming error:', err);
    //     res.status(500).send('Error streaming the file');
    // });
}

module.exports = streamFile;