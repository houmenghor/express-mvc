const { register } = require('../models/auth');

const authServices = async (email, password) => {

    // hash password
    // const hashedPassword = await bcrypt.hash(password, 10);
    return await register(email, password);
};

module.exports = { authServices };