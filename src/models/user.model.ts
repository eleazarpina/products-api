import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.config";

export const User = sequelize.define("users", {
  email: {
    type: DataTypes.STRING,
    unique: true,    
  },
  password: {
    type: DataTypes.STRING,
  },
});