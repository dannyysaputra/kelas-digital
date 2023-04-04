const axios = require('axios');

const {
    URL_SERVICE_COURSE
} = process.env;

module.exports = async (req, res) => { 
    try {
        const id = req.params.id;
        const mentor = await axios.put(`${URL_SERVICE_COURSE}/api/mentors/${id}`, req.body);
        return res.json(mentor.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED ') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}; 