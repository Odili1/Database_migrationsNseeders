const sequelize = require('../database/sequelize');
const {Products, Categories} = require('./../models')


exports.viewItems = async(req, res) => {
    console.log('viewItems');
    try {
        let data = await Products.findAll({
                include: [{
                    model: Categories,
                    required: true,
                    where: {name: "Laptop"}
                }],
                order: [
                    ["id", "ASC"]
                ]
        });

        // If no data
        if (!data){
            return res.status(401).json({
                success: false,
                message: "Products not found"
            })
        }

        return res.status(200).json({
        success: true,
        count: data.length,
        data: data
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}