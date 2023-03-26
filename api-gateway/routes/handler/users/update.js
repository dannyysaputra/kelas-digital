const axios = require('axios');

const {
    URL_SERVICE_USER
} = process.env;

module.exports = async (req, res) => { 
    try {
        const id = req.user.data.id;
        const user = await axios.put(`${URL_SERVICE_USER}/users/${id}`, req.body);
        return res.json(user.data);
    } catch (error) {
        console.log(error);
        if (error.code === 'ECONNREFUSED ') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}; 