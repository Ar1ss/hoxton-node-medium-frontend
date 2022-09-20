import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3456/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Medium</h1>
        {users.map((user) => (
          <ul className='users-list' key={user.id}>
             <li className='user-item'><img className='profile-image' width={60} src={user.image} alt="" /></li>
            <li className='user-item'>{user.name}</li>
          
              {user.posts.map((post) => (
                <ul className='posts-list' key={post.id}>
                  <li className='post-item'>{post.title}</li>
                  <li className='post-item-content'>{post.content}</li>
                  <li className='post-item'><img width = {400} src={post.postImage} alt="" /></li>
                </ul>
              ))}
            
          </ul>
        ))}

       
      </header>
    </div>
  )
}

export default App
