import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = (searchStr) => axios.get(url, { params: { search: searchStr }})
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)