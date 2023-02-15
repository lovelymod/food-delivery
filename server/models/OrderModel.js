import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Order = db.define("orderlist", {
  customer_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  restaurant_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  food_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  food_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  food_logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await db.sync();
})();

export default Order;
