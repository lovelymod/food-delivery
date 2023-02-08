import { Sequelize } from "sequelize";
import db from "../config/database";

const { DataTypes } = Sequelize;

const Order = db.define("order", {
  OrderList: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

(async () => {
  await db.sync();
})();

export default Order;
