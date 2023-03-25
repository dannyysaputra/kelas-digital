const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        email: 'email|empty:false',
        password: 'string|min:8',
        profession: 'string|optional',
        avatar: 'string|optional'
    }

    const validate = v.validate(req.body, schema);
    // console.log(validate);

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const id = req.params.id;
    const user = await User.findByPk(id);
    // console.log(user);

    if(!user) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        })
    }

    const email = req.body.email;
    // console.log(email);
    if (email) {
        const checkEmail = await User.findOne({
            where: { email }
        });
        // console.log(checkEmail);

        if (checkEmail && email !== user.email) {
            return res.status(409).json({
                status: 'error',
                message: 'Email already in use'
            })
        }
    }

    const password = await bcrypt.hash(req.body.password, 10);
    const {
        name, profession, avatar
    } = req.body;

    await user.update({
        email,
        password,
        name,
        profession,
        avatar,
    });

    return res.json({
        status: 'success',
        data: {
            id: user.id,
            name,
            email,
            profession,
            avatar
        }
    })
}