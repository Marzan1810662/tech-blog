import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    let { blogId } = useParams();
    console.log(blogId)
    return (
        <div>
            <p>Single blog</p>
        </div>
    );
};

export default SingleBlog;