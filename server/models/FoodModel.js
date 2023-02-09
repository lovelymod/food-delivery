import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Food = db.define("foodlist", {
  restaurant_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  food_logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  food_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  food_price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await db.sync();
})();

export default Food;
