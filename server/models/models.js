import mongoose from 'mongoose'

const agentSchema = mongoose.Schema({
    agent: String,
    address: String,
    phone: String,
    createAt: {
        type: Date,
        default: new Date()
    }
})

const Agent = mongoose.model('Agent', agentSchema)

export default Agent