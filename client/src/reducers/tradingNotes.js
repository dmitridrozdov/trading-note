import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

// export default (notes = [], action) => {
const tradingNotes = (notes = [], action) => {
    switch (action.type) {
        case DELETE:
            return notes.filter((note) => note._id !== action.payload)
        case UPDATE:
            return notes.map((note) => note._id === action.payload._id ? action.payload : note)
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...notes, action.payload]
        default:
            return notes
    }
}

export default tradingNotes