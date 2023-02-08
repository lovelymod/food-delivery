import Restuarant from "../models/RestaurantModel.js";

export const getRestuarants = async (req, res) => {
  try {
    const response = await Restuarant.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createRestuarant = async (req, res) => {
  try {
    await Restuarant.create(req.body);
    res.status(201).json({ msg: "Restuarant Created" });
  } catch (error) {
    console.log(error.message);
  }
};
