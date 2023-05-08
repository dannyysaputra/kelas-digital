const axios = require('axios');

const {
    URL_SERVICE_COURSE
} = process.env;

module.exports = async (req, res) => { 
    try {
        const userId = req.user.data.id;

        const review = await axios.post(`${URL_SERVICE_COURSE}/api/reviews`, {
            user_id: userId,
            ...req.body
        });
        return res.json(review.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED ') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}; 