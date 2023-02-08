import { Sequelize } from "sequelize";

const db = new Sequelize("food_delivery", "gong", "gong1234", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
