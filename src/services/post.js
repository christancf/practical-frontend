import axios from '../lib/axios'

export const getPosts = async () => {
  try {
    return (await axios.get('/post')).data.data
  } catch (error) {
    throw new Error('Could not retrieve posts')
  }
}

export const addPost = async post => {
  try {
    return (await axios.post('/post/add', post)).data.message
  } catch (error) {
    throw new Error('Could not add post')
  }
}
