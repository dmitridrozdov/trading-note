import mongoose from 'mongoose'

const tradingNoteSchema = mongoose.Schema({
    coin: String,
    type: String,
    deposit: String,
    entry: String,
    stoploss: String,
    tp1: String,
    tp2: String,
    closeposition: String,
    createAt: {
        type: Date,
        default: new Date()
    }
})

const TradingNote = mongoose.model('TradingNote', tradingNoteSchema)

export default TradingNote