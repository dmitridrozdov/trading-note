import mongoose from 'mongoose'

// const postSchema = mongoose.Schema({
//     title: String,
//     message: String,
//     creator: String,
//     tags: [String],
//     likeCount: {
//         type: Number,
//         default: 0
//     },
//     createAt: {
//         type: Date,
//         default: new Date()
//     }
// })

const trawinSchema = mongoose.Schema({
    agent: String,
    names: [String],
    createAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', trawinSchema)

export default PostMessage