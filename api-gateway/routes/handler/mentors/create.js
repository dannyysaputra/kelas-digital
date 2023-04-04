const axios = require('axios');

const {
    URL_SERVICE_COURSE
} = process.env;

module.exports = async (req, res) => { 
    try {
        const mentor = await axios.post(`${URL_SERVICE_COURSE}/api/mentors`, req.body);
        return res.json(mentor.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED ') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}; 