import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Restuarant = db.define("restuarants", {
  restaurant_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  restaurant_logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await db.sync();
})();

export default Restuarant;
