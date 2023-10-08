import { pool } from "./database.js";
import "../config/dotenv.js";
import carData from "../data/carData.js";

const createCarTable = async () => {
    const createTableQuery = 
    `DROP TABLE IF EXISTS CustomItem;

    CREATE TABLE IF NOT EXISTS CustomItem (
        id SERIAL PRIMARY KEY,
        exterior VARCHAR(255) NOT NULL,
        roof VARCHAR(255) NOT NULL,
        wheels VARCHAR(255) NOT NULL,
        interior VARCHAR(255) NOT NULL
    )
    `
    try {
        await pool.query(createTableQuery)
        console.log('🎉 CustomItem table created successfully')
      } catch (err) {
        console.error('⚠️ error creating CustomItem table', err)
      }
}

const seedCarTable = async () => {
    await createCarTable();
}

seedCarTable();