import { pool } from "../config/database.js";

const getGifts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
        result.status(200).json(result.rows)
    } catch(err) {
        result.status(409).json({err: err.message})
    }
}

export default { getGifts }