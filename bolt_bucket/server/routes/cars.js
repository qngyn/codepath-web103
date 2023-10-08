import express from 'express'
import CarRouter from "../controllers/cars.js"

const carsRouter = express.Router()

carsRouter.get('/', CarRouter.getCars)

carsRouter.get('/:carId', CarRouter.getCarById)

carsRouter.post('/', CarRouter.createCar)

carsRouter.patch('/:id', CarRouter.updateCar)

carsRouter.delete('/:id', CarRouter.deleteCar)

export default carsRouter;

