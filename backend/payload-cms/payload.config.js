// backend/payload-cms/payload.config.js

const { buildConfig } = require('payload/config');

const config = buildConfig({
    collections: [
        require('./collections/Product'),
        require('./collections/User'),
        require('./collections/Order'),
    ],
});

module.exports = config;
