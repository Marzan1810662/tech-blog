import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar.js/Navbar';
import { ADD_TO_READING_HISTORY } from '../../redux/actionTypes/actionTypes';

const ReadingHistory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { readingHistory } = useSelector(state => state)
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-3 justify-center items-center p-2 lg:p-4'>
                {
                    readingHistory.length && readingHistory.sort((a, b) => a.position - b.position).map(content =>
                        <div className="card w-5/6 bg-base-100 shadow-xl" key={content._id}>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {content.title}
                                </h2>
                                <p>{content.mainContent.length > 100 ? content.mainContent.slice(0, 150) + '...' : content.mainContent}</p>
                                <span className='btn btn-link no-underline text-end p-3'
                                    onClick={() => {
                                        navigate(`/blog/${content._id}`);
                                        dispatch({ type: ADD_TO_READING_HISTORY, payload: content })
                                    }}
                                ><p>See more...</p></span>
                                <div className="card-actions justify-end">
                                    <div className="hover:bg-secondary badge badge-outline cursor-pointer">{content.flags[0]}</div>
                                    <div className="hover:bg-secondary badge badge-outline cursor-pointer">{content.flags[1]}</div>
                                    <div className="hover:bg-secondary badge badge-outline cursor-pointer">{content.flags[2]}</div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default ReadingHistory;