const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async(req, res, next) => {
    let token 

    if(request.headers.authorization && request.headers.authorization.startsWith('Bearer')){
        try {
            // Getting token from header
            token = req.headers.authorization.split(' ')[1]
            // Verifying token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Getting user from the token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error ('Not Authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not Authorized, no token');
    }
})

module.exports = { protect }