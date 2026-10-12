import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

  return (
    <div>
        <h2>Posts</h2>

        <ol>
        {posts.map((post) => (
            <li key={post.id}>
                <h3>{post.title}</h3>
            </li>
        ))}
      </ol>
    </div>
  );
}

export default PostList;
