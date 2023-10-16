const { Users, Sequelize, sequelize } = require("./../models");
const Op = Sequelize.Op;
const jwt = require('jsonwebtoken');
require('dotenv').config()


exports.createUser = async (req, res) => {
  try {
    const reqBody = req.body
    // Check existing username
    let existingUsername = await Users.findOne({where: {username: {[Op.eq]: reqBody.username}}});

    if (existingUsername){
      return res.status(422).json({
        success: false,
        message: "User with this username already exist"
      })
    }
    
    // Check existing email
    let existingEmail = await Users.findOne({where: {
      email: {
        [Op.eq]: reqBody.email
      }
    }});

    if (existingEmail){
      return res.status(422).json({
        success: false,
        message: "Email already signed up"
      })
    }

    // Create the new User
    let newUser = await Users.create({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone_number: req.body.phone_number,
      gender: req.body.gender,
      country: req.body.country
    });

    // Create user token
    const token = jwt.sign({id: newUser.id, username: newUser.username}, process.env.JWT_SECRET)


    return res.status(201).json({
      success: true,
      message: "User created successfully",
      newUser,
      token
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
};

exports.Login = async(req, res) => {
  try {
    const reqBody = req.body;

    // Check if username exists
    let user = await Users.findOne({where: {username: {[Op.eq]: reqBody.username}}});

    if (!user){
      return res.status(404).json({
        success: false,
        message: "Incorrect Username"
      })
    }


    // Check if password is correct
    const isValid = await user.validatePassword(reqBody.password);

    if (!isValid){
      return res.status(404).json({
        success: false,
        message: "Incorreect email or password"
      })
    }

    // If exist, create token
    const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET);

    return res.status(200).json({
      success: true,
      message: "User login successful",
      user,
      token
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
};