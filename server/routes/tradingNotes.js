import express from 'express'

import { getTradingNotes, createTradingNote, updateTradingNote, deleteTradingNote } from '../controllers/tradingNotes.js'

const router = express.Router()

router.get('/', getTradingNotes)
router.post('/', createTradingNote)
router.patch('/:id', updateTradingNote)
router.delete('/:id', deleteTradingNote)

export default router