import Customer from "../models/CustomerModel.js";

export const createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    res.status(200).json({ msg: "Customer Created" });
  } catch (error) {
    console.log(error);
  }
};

export const getCustomer = async (req, res) => {
  try {
    const response = await Customer.findByPk(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const loginCustumer = async (req, res) => {
  try {
    const response = await Customer.findAll({
      where: {
        username: req.body.username,
      },
    });

    const username = response[0].username;
    const password = response[0].password;

    if (!username) {
      res.status(404).json({ msg: "Username not found" });
    } else {
      if (password === req.body.password) {
        res.status(200).json({ msg: "Logged in", cusID: response[0].id });
      } else {
        res.status(400).json({ msg: "Wrong password" });
      }
    }
  } catch (error) {
    res.status(404).json({ msg: "Username not found" });
  }
};
