const axios = require('axios');

const { TIMEOUT } = process.env;

// base url untuk berbagai api
module.exports = (baseUrl) => {
    return axios.create({
        baseUrl: baseUrl,
        timeout: TIMEOUT
    })
}