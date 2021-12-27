import mongoose from 'mongoose'

const tradingNoteSchema = mongoose.Schema({
    coin: String,
    address: String,
    phone: String,
    createAt: {
        type: Date,
        default: new Date()
    }
})

const TradingNote = mongoose.model('TradingNote', tradingNoteSchema)

export default TradingNote