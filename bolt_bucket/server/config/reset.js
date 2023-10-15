import { pool } from "./database.js";
import "../config/dotenv.js";

const createCarTable = async () => {
    const createTableQuery = 
    `DROP TABLE IF EXISTS CustomItem;

    CREATE TABLE IF NOT EXISTS CustomItem (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        price INTEGER NOT NULL,
        exterior VARCHAR(255) NOT NULL,
        exteriorprice INTEGER NOT NULL,
        exteriorimage VARCHAR(255) NOT NULL,
        roof VARCHAR(255) NOT NULL,
        roofprice INTEGER NOT NULL,
        roofimage VARCHAR(255) NOT NULL,
        wheels VARCHAR(255) NOT NULL,
        wheelsprice INTEGER NOT NULL,
        wheelsimage VARCHAR(255) NOT NULL,
        interior VARCHAR(255) NOT NULL,  
        interiorprice INTEGER NOT NULL,
        interiorimage VARCHAR(255) NOT NULL,
        convertible BOOLEAN NOT NULL
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