import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Restuarant = db.define("restuarants", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Foods: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await db.sync();
})();

export default Restuarant;
