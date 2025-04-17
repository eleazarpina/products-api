import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.config";

export const Product = sequelize.define("products", {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  prod_line: {
    type: DataTypes.STRING,
  },
  min_stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  created_by: {
    type: DataTypes.STRING,
  }
})