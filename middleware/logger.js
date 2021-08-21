const path = require('path');
const fs = require('fs');
const moment = require('moment');
const logger = (req, res, next) => {

    fs.appendFile(path.join(__dirname, 'log.txt'),
        `\n ${req.method}:${req.protocol}://${req.get('host')}${req.originalUrl}    :${moment().format()}`,
        err => {
            if (err) throw err;
        });


    next();
};

module.exports = logger;