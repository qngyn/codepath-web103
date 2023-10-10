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
            SELECT name, price, exterior, exteriorprice, exteriorimage, roof, roofprice, roofimage, wheels, wheelsprice, wheelsimage, interior, interiorprice, interiorimage
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
        const { name, price, exterior, exteriorprice, exteriorimage, roof, roofprice, roofimage, wheels, wheelsprice, wheelsimage, interior, interiorprice, interiorimage } = req.body 
        const result = await pool.query(
            `
            INSERT INTO CustomItem (name, price, exterior, exteriorprice, exteriorimage, roof, roofprice, roofimage, wheels, wheelsprice, wheelsimage, interior, interiorprice, interiorimage) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
            RETURNING *
            `,
            [name, price, exterior, exteriorprice, exteriorimage, roof, roofprice, roofimage, wheels, wheelsprice, wheelsimage, interior, interiorprice, interiorimage]
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
        const { name, price, exterior, exteriorprice, exteriorimage, roof, roofprice, roofimage, wheels, wheelsprice, wheelsimage, interior, interiorprice, interiorimage } = req.body 
        const results = await pool.query(
            `   
            UPDATE CustomItem SET name = $1, price = $2, exterior = $3, exteriorprice = $4, exteriorimage = $5, roof = $6, roofprice = $7, roofimage = $8, wheels = $9, wheelsprice = $10, wheelsimage = $11, interior = $12, interiorprice = $13, interiorimage = $14 WHERE id = $15
            `,
            [name, price, exterior, exteriorprice, exteriorimage, roof, roofprice, roofimage, wheels, wheelsprice, wheelsimage, interior, interiorprice, interiorimage, id]
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