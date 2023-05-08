const axios = require('axios');

const {
    URL_SERVICE_ORDER_PAYMENT
} = process.env;

module.exports = async (req, res) => { 
    try {
        const userId = req.user.data.id;

        const orders = await axios.get(`${URL_SERVICE_ORDER_PAYMENT}/api/orders`, {
            params: { user_id: userId },
        });
        return res.json(orders.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}; 