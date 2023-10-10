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
        exteriorprice INTEGER NOT NULL,
        roof VARCHAR(255),
        roofprice INTEGER NOT NULL,
        wheels VARCHAR(255),
        wheelsprice INTEGER NOT NULL,
        interior VARCHAR(255),  
        interiorprice INTEGER NOT NULL
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