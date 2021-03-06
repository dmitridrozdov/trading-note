import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api'

// Action Creator
export const getTradingNotes = (searchStr) => async(dispatch) => {
    try {
        const { data } = await api.fetchTradingNotes(searchStr)
        dispatch({ type: FETCH_ALL, payload: data })
    } catch(error) {
        console.log(error.message)
    }   
}

export const createTradingNote = (note) => async(dispatch) => {
    try {
        const { data } = await api.createTradingNote(note)
        dispatch({ type: CREATE, payload: data })
    } catch(error) {
        console.log(error.message)
    }   
}

export const updateTradingNote = (id, note) => async(dispatch) => {
    try {
        const { data } = await api.updateTradingNote(id, note)
        console.log(note)
        dispatch({ type: UPDATE, payload: data })
    } catch(error) {
        console.log(error.message)
    }   
}

export const deleteTradingNote = (id) => async(dispatch) => {
    try {
        await api.deleteTradingNote(id)
        dispatch({ type: DELETE, payload: id })
    } catch(error) {
        console.log(error)
    }
}