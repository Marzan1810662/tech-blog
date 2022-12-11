import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleTag } from '../redux/actions/contentActions';
import { ADD_TO_READING_HISTORY } from '../redux/actionTypes/actionTypes';

const ContentCard = ({content}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
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
                    <div className="hover:bg-secondary badge badge-outline cursor-pointer"
                        onClick={() => dispatch(toggleTag(content.flags[0]))}>{content.flags[0]}</div>
                    <div className="hover:bg-secondary badge badge-outline cursor-pointer"
                        onClick={() => dispatch(toggleTag(content.flags[1]))}>{content.flags[1]}</div>
                    <div className="hover:bg-secondary badge badge-outline cursor-pointer"
                        onClick={() => dispatch(toggleTag(content.flags[2]))}>{content.flags[2]}</div>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;