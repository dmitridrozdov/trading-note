import axios from 'axios'

const url = 'http://localhost:5000/tradingnotes'
// const url = 'https://trawin.herokuapp.com/agents'

export const fetchTradingNotes = (searchStr) => axios.get(url, { params: { search: searchStr }})
export const createAgent = (newPost) => axios.post(url, newPost)
export const updateAgent = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deleteAgent = (id) => axios.delete(`${url}/${id}`)