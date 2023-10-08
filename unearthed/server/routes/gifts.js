import express from 'express'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import {getGiftById} from '../controllers/gifts.js'
import GiftsController from '../controllers/gifts.js'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', GiftsController.getGifts)
router.get('/:giftId',  GiftsController.getGiftById)

router.post('/', GiftsController.createGift)
router.delete('/:id', GiftsController.deleteGift)
router.patch('/:id', GiftsController.updateGift)
// (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
// })

router.get('/', GiftsController.getGifts)

export default router