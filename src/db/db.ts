import { config } from "dotenv";
import { Sequelize } from "sequelize";
config();
const DATABASE_NAME = process.env.DATABASE_NAME ?? "";
const DATABASE_USER = process.env.DATABASE_USER ?? "";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? "";
const DB_HOST = process.env.DB_HOST ?? "";
const DIALECT: any = process.env.DIALECT;
const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DB_HOST,
    dialect: DIALECT,
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => console.log(e));
export { sequelize };
