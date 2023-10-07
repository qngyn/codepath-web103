import { pool } from "../config/database.js";

const getLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations ORDER BY id ASC')
        res.status(200).json(result.rows)
    } catch (err) {
        res.status(400).json({ error: err.message })   
    }
}

const getLocationById =   async (req, res) => {
    try {
        const locationId = req.params.locationId
        const selectQuery = `
            SELECT name, address, city, state, zip, image
            FROM locations
            WHERE id = ${locationId}
        `
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

export default {  getLocations, getLocationById  }