import mongoose from 'mongoose'
import Agent from '../models/models.js'
import { puts } from '../scripts/shellScript.js'


export const getAgents = async (req, res) => {
    try {
        let search = req.query.search
        const agents = await Agent.find({agent: {$regex: search}})
        res.status(200).json(agents)
    } catch(error) {
        res.status(404).json({ message: error.message})
    }
}

export const createAgent =  async (req, res) => {
    const post = req.body
    const newAgent = new Agent(post)
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
    await Agent.findByIdAndUpdate(id, updatedAgent, { new: true });
    res.json(updatedAgent);

    puts() //SHELL SCRIPT EXECUTION

}

export const deleteAgent = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    await Agent.findByIdAndRemove(id)
    res.json({ message: 'Agent deleted successfully'})
}