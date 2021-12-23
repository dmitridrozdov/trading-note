import mongoose from 'mongoose'
import TradingNote from '../models/models.js'


export const getAgents = async (req, res) => {
    try {
        let search = req.query.search
        const agents = await TradingNote.find({agent: {$regex: search}})
        res.status(200).json(agents)
    } catch(error) {
        res.status(404).json({ message: error.message})
    }
}

export const createAgent =  async (req, res) => {
    const post = req.body
    const newAgent = new TradingNote(post)
    try {
        await newAgent.save()
        res.status(201).json(newAgent)
    } catch(error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateAgent = async (req, res) => {
    const { id } = req.params;
    const { agent, address, phone } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedAgent = { agent, address, phone, _id: id };
    await TradingNote.findByIdAndUpdate(id, updatedAgent, { new: true });
    res.json(updatedAgent);
}

export const deleteAgent = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    await TradingNote.findByIdAndRemove(id)
    res.json({ message: 'Agent deleted successfully'})
}