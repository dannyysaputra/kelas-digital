const axios = require('axios');

const {
    URL_SERVICE_ORDER_PAYMENT
} = process.env;

module.exports = async (req, res) => { 
    try {
        const webhook = await axios.post(`${URL_SERVICE_ORDER_PAYMENT}/api/webhook`, req.body);
        return res.json(webhook.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}; 