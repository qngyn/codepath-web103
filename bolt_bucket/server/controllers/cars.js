import { pool } from "../config/database.js";

//GET
const getCars = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM CustomItem ORDER BY id ASC')
        res.status(200).json(result.rows)

    } catch (err) {
        res.status(400).json({ error: err.message })   
    }
}

const getCarById = async (req, res) => {
    try {
        const carId = req.params.carId
        const selectQuery = `
            SELECT exterior, roof, wheels, interior
            FROM CustomItem
            WHERE id = ${carId}
        `
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

// POST 
const createCar = async (req, res) => {
    try {
        const { exterior, roof, wheels, interior } = req.body 
        const result = await pool.query(
            `
            INSERT INTO CustomItem (exterior, roof, wheels, interior) 
            VALUES ($1, $2, $3, $4)
            RETURNING *
            `,
            [exterior, roof, wheels, interior]
        )
        res.status(201).json(result.rows[0])

    } catch (err) {
        res.status(409).json( { error: err.message } )
    }
}

//PUT 
const updateCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { exterior, roof, wheels, interior } = req.body 
        const results = await pool.query(
            `   
            UPDATE CustomItem SET exterior = $1, roof = $2, wheels = $3, interior = $4 WHERE id = $5
            `,
            [exterior, roof, wheels, interior, id]
        )

        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

//DELETE 
const deleteCar = async ( req, res ) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM CustomItem WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

export default { 
    getCars, 
    getCarById,
    createCar,
    updateCar,
    deleteCar
}