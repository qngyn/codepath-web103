import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import characterData from '../data/character.js';
import CharacterController from "../controllers/characters.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// router.get('/', (req, res) => {
//     res.status(200).json(characterData)
// })

router.get('/:characterId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/character.html'))
})

router.get('/', CharacterController.getCharacters)

export default router;