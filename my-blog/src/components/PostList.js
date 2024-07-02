import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const PostList = () => {
    const [posts,setPosts]=useState([]);

    useState(()=>{
        axios.get('/api/posts')
        .then(response => setPosts(response.data))
        .catch(error=>console.error(error));
    },[]);

    return (
        <div>
            <h1>Blog Post</h1>
            <ul>
                {posts.map(post=>(
                    <li key={post._id}>
                        <Link to={'/post/${post._id}'}>{post.title}</Link>
                    </li>
                ))}
            </ul>            
        </div>
    );
}

export default PostList;
