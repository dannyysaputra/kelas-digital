const axios = require('axios');

const {
    URL_SERVICE_MEDIA
} = process.env;

module.exports = async (req, res) => { 
    try {
        const media = await axios.post(`${URL_SERVICE_MEDIA}/media`, req.body);
        return res.json(media.data);
    } catch (error) {
        console.log(error);
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}; 