import { pool } from "./database.js";
import "../config/dotenv.js";

const createCarTable = async () => {
    const createTableQuery = 
    `DROP TABLE IF EXISTS CustomItem;

    CREATE TABLE IF NOT EXISTS CustomItem (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        price INTEGER NOT NULL,
        exterior VARCHAR(255),
        roof VARCHAR(255),
        wheels VARCHAR(255),
        interior VARCHAR(255)
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