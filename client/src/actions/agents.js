import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api'

// Action Creator
export const getAgents = (searchStr) => async(dispatch) => {
    try {
        const { data } = await api.fetchTradingNotes(searchStr)
        console.log(data)
        dispatch({ type: FETCH_ALL, payload: data })
    } catch(error) {
        console.log(error.message)
    }   
}

export const createAgent = (post) => async(dispatch) => {
    try {
        const { data } = await api.createAgent(post)
        dispatch({ type: CREATE, payload: data })
    } catch(error) {
        console.log(error.message)
    }   
}

export const updateAgent = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updateAgent(id, post)
        console.log(post)
        dispatch({ type: UPDATE, payload: data })
    } catch(error) {
        console.log(error.message)
    }   
}

export const deleteAgent = (id) => async(dispatch) => {
    try {
        await api.deleteAgent(id)
        dispatch({ type: DELETE, payload: id })
    } catch(error) {
        console.log(error)
    }
}