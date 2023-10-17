const UserModel = require('../models/users.model');
const jwt = require('jsonwebtoken');

exports.bearerTokenAuth = (req, res, next) => {
    try {
        authHeader = req.headers;

        if (!authHeader){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const token = authHeader.authorization.split(" ")[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decoded);

        if (!decoded){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const user = UserModel.findOne({email: decoded.email});

        if (!user){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        req.user = user;

        next()

    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}
