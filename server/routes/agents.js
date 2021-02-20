import express from 'express'

import { getAgents, createAgent, updateAgent, deleteAgent } from '../controllers/agents.js'

const router = express.Router()

router.get('/', getAgents)
router.post('/', createAgent)
router.patch('/:id', updateAgent)
router.delete('/:id', deleteAgent)

export default router