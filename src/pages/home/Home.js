import React, { useEffect } from 'react';
import Navbar from '../../components/navbar.js/Navbar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import fetchAllContentsData from '../../redux/thunk/content/fetchAllContentsData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { contents } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchAllContentsData())
    }, []);

    return (
        <div className='flex flex-col gap-4'>
            <Navbar />
            <div className='flex justify-end pr-11'>
                <span className='flex items-center justify-center gap-1'>
                    <span>Sort By Upload</span>
                    <span className='cursor-pointer' title='sort by first upload'><AiOutlineArrowDown /></span>
                    <span className='cursor-pointer' title='sort by last upload'><AiOutlineArrowUp /></span>
                </span>
            </div>
            <div className='flex flex-wrap gap-5 justify-around'>
                {
                    contents.length && contents.map(content =>
                        <div className="card w-96 bg-base-100 shadow-xl" key={content._id}>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {content.title}
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                </h2>
                                <p>{content.mainContent}</p>
                                <span className='btn btn-link no-underline text-end p-3' onClick = {()=> navigate(`/blog/${content._id}`)}><p>See more...</p></span>
                            <div className="card-actions justify-end">
                                <div className="hover:bg-secondary badge badge-outline cursor-pointer">{content.flags[0]}</div>
                                <div className="hover:bg-secondary badge badge-outline cursor-pointer">{content.flags[1]}</div>
                                <div className="hover:bg-secondary badge badge-outline cursor-pointer">{content.flags[2]}</div>
                            </div>
                        </div>
                        </div>)
                }
        </div>
        </div >
    );
};

export default Home;