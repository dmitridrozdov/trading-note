import mongoose from 'mongoose'
import TradingNote from '../models/models.js'


export const getTradingNotes = async (req, res) => {
    try {
        let search = req.query.search
        const tradingNotes = await TradingNote.find({agent: {$regex: search}})
        res.status(200).json(tradingNotes)
    } catch(error) {
        res.status(404).json({ message: error.message})
    }
}

export const createTradingNote =  async (req, res) => {
    const post = req.body
    const newTradingNote = new TradingNote(post)
    try {
        await newTradingNote.save()
        res.status(201).json(newTradingNote)
    } catch(error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateTradingNote = async (req, res) => {
    const { id } = req.params;
    const { agent, address, phone } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedTradingNote = { agent, address, phone, _id: id };
    await TradingNote.findByIdAndUpdate(id, updatedTradingNote, { new: true });
    res.json(updatedTradingNote);
}

export const deleteTradingNote = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    await TradingNote.findByIdAndRemove(id)
    res.json({ message: 'Trading Note deleted successfully'})
}