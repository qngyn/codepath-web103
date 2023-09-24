import { pool } from "../config/database.js";

const getCharacters = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM characters ORDER BY id ASC')
        res.status(200).json(result.rows)
    } catch (err) {
        res.status(409).json( { err: err.message } )
    }
} 

export default {getCharacters}