import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Posts from'./components/Posts'

const  App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data)
    setLoading(false)
  }
  fetchPosts()
  }, []
  )
  console.log(posts)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="App">
      <h1>My App</h1>

    <Posts posts={currentPosts} loading={loading}></Posts>
    </div>
  );
}

export default App;
