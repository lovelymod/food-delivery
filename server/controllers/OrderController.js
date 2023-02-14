import Order from "../models/OrderModel.js";

export const createOrder = async (req, res) => {
  try {
    await Order.create(req.body);
    res.status(201).json({ msg: "Order Created" });
  } catch (error) {
    console.log(error.message);
  }
};

// * findpending order
export const getoneOrder = async (req, res) => {
  try {
    const response = await Order.findOne({
      where: {
        food_id: req.params.id,
        status: "pending",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrder = async (req, res) => {
  try {
    const response = await Order.findAll({
      where: {
        status: "pending",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDelivOrder = async (req, res) => {
  try {
    const response = await Order.findAll({
      where: {
        status: "delivered",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateOrder = async (req, res) => {
  try {
    await Order.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json({ msg: "Order Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Order deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
