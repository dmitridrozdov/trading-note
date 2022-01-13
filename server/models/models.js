import mongoose from 'mongoose'

const tradingNoteSchema = mongoose.Schema({
    coin: String,
    type: String,
    deposit: String,
    entry: String,
    stoploss: String,
    tp: String,
    closeposition: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const TradingNote = mongoose.model('TradingNote', tradingNoteSchema)

export default TradingNote