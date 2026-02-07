import { useEffect, useState } from 'react';


export default function Posts() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);


  return (
    <div className="p-6">
      {posts.slice(0, 5).map(post => (
        <div key={post.id} className="mb-4 p-4 border rounded">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}