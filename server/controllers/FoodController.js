import Food from "../models/FoodModel.js";

export const getAllFoodByID = async (req, res) => {
  try {
    const response = await Food.findAll({
      where: {
        restaurant_id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFoodsinOrder = async (req, res) => {
  try {
    const response = await Food.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFoodByID = async (req, res) => {
  try {
    const response = await Food.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createFood = async (req, res) => {
  try {
    await Food.create(req.body);
    res.status(201).json({ msg: "Food Created" });
  } catch (error) {
    console.log(error.message);
  }
};
