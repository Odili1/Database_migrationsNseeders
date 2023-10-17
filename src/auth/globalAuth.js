const jwt = require('jsonwebtoken');
const {Users, Sequelize} = require('./../models')
require('dotenv').config();

const Op = Sequelize.Op;
exports.bearerAuth = async(req, res, next) => {
    try {
        authHeader = req.headers;
        
        if (!authHeader){
            return res.status(401).json({
                success: false,
                message: "Login for more"
            })
        };
        
        const token = authHeader.authorization.split(" ")[1];
        
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);

        if (!verifiedUser){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }
        
        const user = await Users.findOne({
            where: {
                username: {
                    [Op.eq]: verifiedUser.username
                }
            }
        })
        
        req.user = user;
        
        console.log("Auth", verifiedUser);
        next()
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }
}


