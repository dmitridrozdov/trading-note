import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

export default (coins = [], action) => {
    switch (action.type) {
        case DELETE:
            return coins.filter((coin) => coin._id !== action.payload)
        case UPDATE:
            return coins.map((coin) => coin._id === action.payload._id ? action.payload : coin)
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...coins, action.payload]
        default:
            return coins
    }
}