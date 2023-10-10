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
            SELECT name, price, exterior, exteriorPrice, roof, roofPrice, wheels, wheelsPrice, interior, interiorPrice
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
        const { name, price, exterior, exteriorprice, roof, roofprice, wheels, wheelsprice, interior, interiorprice } = req.body 
        console.log(req.body)
        console.log(req.body.exteriorprice)
        const result = await pool.query(
            `
            INSERT INTO CustomItem (name, price, exterior, exteriorprice, roof, roofprice, wheels, wheelsprice, interior, interiorprice) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *
            `,
            [name, price, exterior, exteriorprice, roof, roofprice, wheels, wheelsprice, interior, interiorprice]
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
        const { name, price, exterior, exteriorprice, roof, roofprice, wheels, wheelsprice, interior, interiorprice } = req.body 
        const results = await pool.query(
            `   
            UPDATE CustomItem SET name = $1, price = $2, exterior = $3, exteriorprice = $4, roof = $5, roofprice = $6, wheels = $7, wheelsprice = $8, interior = $9, interiorprice = $10 WHERE id = $11
            `,
            [name, price, exterior, exteriorprice, roof, roofprice, wheels, wheelsprice, interior, interiorprice, id]
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