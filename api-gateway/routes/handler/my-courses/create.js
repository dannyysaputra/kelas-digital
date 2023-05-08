const axios = require('axios');

const {
    URL_SERVICE_COURSE
} = process.env;

module.exports = async (req, res) => { 
    try {
        const userId = req.user.data.id;
        const courseId = req.body.course_id;

        const myCourse = await axios.post(`${URL_SERVICE_COURSE}/api/my-courses`, {
            user_id: userId,
            course_id: courseId
        });
        return res.json(myCourse.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}; 