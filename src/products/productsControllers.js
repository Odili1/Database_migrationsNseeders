const Products = require("../models/products.model");

exports.viewItems = async (req, res) => {
  console.log("viewItems");
  try {
    let data = await Products.findAll({});

    // If no data
    if (!data) {
      return res.status(401).json({
        success: false,
        message: "Products not found",
      });
    }

    return res.status(200).json({
      success: true,
      count: data.length,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};
