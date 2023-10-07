import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(result.rows)
    } catch (err) {
        res.status(400).json({ error: err.message })   
    }
}

const getEventById =   async (req, res) => {
    try {
        const eventId = req.params.eventId
        const selectQuery = `
            SELECT location, title, time, image
            FROM events
            WHERE id = ${eventId}
        `
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

export default {  getEvents, getEventById  }