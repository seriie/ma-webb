const path = require('path');
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DOMAIN: process.env.DOMAIN,
    PROTOCOL: process.env.PROTOCOL,
    DATA_PATH: path.join(__dirname, './database/data.json')
}