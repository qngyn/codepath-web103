import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import cors from 'cors'
import eventsRouter from './routes/eventsRouter.js'
import locationRouter from './routes/locationsRouter.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'party.png')))
    app.use(express.static('public'))
}


app.use('/events', eventsRouter)
app.use('/locations', locationRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align": center; margin-top: 50px;>Events API</h1>')
})

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})