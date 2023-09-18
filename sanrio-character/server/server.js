import express from 'express';
import characterRoutes from './routes/characters.js';

const app = express(); 

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/characters', characterRoutes)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> Saniro Character</h1>')
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


