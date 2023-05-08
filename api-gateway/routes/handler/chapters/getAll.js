const axios = require('axios');

const {
    URL_SERVICE_COURSE
} = process.env;

module.exports = async (req, res) => { 
    try {
        const chapters = await axios.get(`${URL_SERVICE_COURSE}/api/chapters`, {
            params: {
                ...req.query
            }
        });
        return res.json(chapters.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED ') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}; 