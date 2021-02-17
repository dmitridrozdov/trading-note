import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'
import { puts } from '../scripts/shellScript.js'


export const getPosts = async (req, res) => {
    try {
        let search = req.query.search
        const postMessages = await PostMessage.find({agent: {$regex: search}})
        res.status(200).json(postMessages)
    } catch(error) {
        res.status(404).json({ message: error.message})
    }
}

export const createPost =  async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch(error) {
        res.status(409).json({ message: error.message})
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { agent, names } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedPost = { agent, names, _id: id };
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);

    puts() //SHELL SCRIPT EXECUTION

}

export const deletePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    await PostMessage.findByIdAndRemove(id)
    res.json({ message: 'Post deleted successfully'})
}