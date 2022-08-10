import axios from "axios"

export const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:3000/posts');
    return data;
}

export const addPosts = async (todo) => {
    const { data } = await axios.post(`http://localhost:3000/posts`, todo)
    return data;
}

export const deletePost = async({ id }) => {
    const  { data } = await axios.delete(`http://localhost:3000/posts/${id}`)
    return data;
}