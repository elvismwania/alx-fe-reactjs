// src/components/BlogPost.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return <h2>Blog Post {postId}</h2>;
}

export default BlogPost;
