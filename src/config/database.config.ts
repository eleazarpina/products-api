import 'dotenv/config'

import { Sequelize } from "sequelize";

const connectionString = process.env.CONNECT_DB || '';

export const sequelize = new Sequelize( connectionString );