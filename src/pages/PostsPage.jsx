import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { jsonplaceholderApi } from "../api"

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(data => setPosts(data))
        const getPosts = async() => {
            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const response = await jsonplaceholderApi.get('/posts')
            setPosts(response.data)
        }
        getPosts()
    }, [])

  return (
    <div>
        <ul>
            {posts && posts.map(post => (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default PostsPage