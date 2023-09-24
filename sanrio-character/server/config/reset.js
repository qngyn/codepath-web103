import { pool } from "./database.js";
import "../config/dotenv.js";
import characterData from "../data/character.js";

const createCharacterTable = async () => {
    const createCharacterTableQuery = `
        DROP TABLE IF EXISTS characters;
        CREATE TABLE IF NOT EXISTS characters (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            fullname VARCHAR(255),
            japanesename VARCHAR(255) ,
            description TEXT ,
            debutyear INT,
            image VARCHAR(255) ,
            birthday VARCHAR(255),
            universe VARCHAR(255)
        )
    `
    try {
        const res = await pool.query(createCharacterTableQuery)
        console.log('🎉 characters table created successfully')
      } catch (err) {
        console.error('⚠️ characters creating gifts table', err)
      }
}

const seedCharacterTable = async () => {
    await createCharacterTable()
    characterData.forEach((character) => {
        const insertQuery = {
            text: 'INSERT INTO characters (name, fullname, japanesename, description, debutyear, image, birthday, universe) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        }
        
        const vals = [
            character.name, 
            character.fullname,
            character.japanesename,
            character.description,
            character.debutyear,
            character.image,
            character.birthday,
            character.universe
        ]

        pool.query(insertQuery, vals, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting gift', err)
                return
            }
            console.log(`✅ ${character.name} added successfully`)
        })
    })
}

seedCharacterTable();