const apiAdapter = require('../../apiAdapter');
const axios = require('axios');

const {
    URL_SERVICE_MEDIA
} = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => { 
    try {
        const media = await axios.post('http://localhost:8080/media', req.body);
        return res.json(media.data);
    } catch (error) {
        console.log(error);
        if (error.code === 'ECONNREFUSED ') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        // const { status, data } = error.response;
        return res.status(500).json({ status: 'error', message: error.message });
    }
}; 