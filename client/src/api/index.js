import axios from 'axios'

const url = 'http://localhost:5000/tradingnotes'
// const url = 'https://trawin.herokuapp.com/agents'

export const fetchTradingNotes = (searchStr) => axios.get(url, { params: { search: searchStr }})
export const createTradingNote = (newPost) => axios.post(url, newPost)
export const updateTradingNote = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deleteTradingNote = (id) => axios.delete(`${url}/${id}`)