import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

export default (agents = [], action) => {
    switch (action.type) {
        case DELETE:
            return agents.filter((agent) => agent._id !== action.payload)
        case UPDATE:
            return agents.map((agent) => agent._id === action.payload._id ? action.payload : agent)
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...agents, action.payload]
        default:
            return agents
    }
}