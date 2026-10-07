const { authServices } = require('../services/authServices');

const authController = async (req, res) => {
    const { email, password } = req.validate;
    
    try {
        const result = await authServices(email, password);
        return res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            error: error.message
        });
    }
};

module.exports = { authController };