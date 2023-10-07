import express from 'express'

import LocationRouter from '../controllers/locations.js'

const locationsRouter = express.Router()

locationsRouter.get('/', LocationRouter.getLocations)

locationsRouter.get('/:locationId', LocationRouter.getLocationById)

export default locationsRouter;