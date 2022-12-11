import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar.js/Navbar';
import fetchSingleContentData from '../../redux/thunk/content/fetchSingleContentData';

const SingleBlog = () => {
    let { blogId } = useParams();
    const dispatch = useDispatch();
    const { content } = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchSingleContentData(blogId));
    }, []);
    return (
        <>
        <Navbar/>
        <div className='mx-auto my-4 p-2 lg:p-4'>
            <h1 className='text-xl py-2'>{content.title}</h1>
            <p className='py-2 text-primary text-end'>{content.uploadTime}</p>
            <p className='py-3'>{content.mainContent}</p>
            <span className='flex flex-wrap gap-2 py-4'>
                {content.flags?.length && content.flags.map((flag, index) => 
                <p className='border px-2 text-primary' key={flag}>{flag}</p>)}
            </span>
        </div>
        </>
    );
};

export default SingleBlog;