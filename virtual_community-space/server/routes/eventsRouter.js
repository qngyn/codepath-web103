import express from 'express'

import EventsController from '../controllers/events.js'


const eventsRouter = express.Router()


eventsRouter.get('/', EventsController.getEvents)

eventsRouter.get('/:eventId',EventsController.getEventById)

export default eventsRouter