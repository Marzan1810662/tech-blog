import React, { useEffect } from 'react';
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import deleteContentData from '../../../redux/thunk/content/deleteContentData';
import fetchAllContentsData from '../../../redux/thunk/content/fetchAllContentsData';

const AllBlog = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector(state => state);
    //console.log(contents);

    useEffect(() => {
        dispatch(fetchAllContentsData())
    }, [])
    return (
        <div className="overflow-x-auto w-5/6">
            <table className="table w-full text-primary-focus border">
                {/* <!-- head --> */}
                <thead className='text-primary-content'>
                    <tr>
                        <th>No.</th>
                        <th>title</th>
                        <th>Upload Time</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contents.length && contents.map((content, index) =>
                            <tr className='border' key={content._id}>
                                <td>{++index}</td>
                                <td>{content.title}</td>
                                <td>{content.uploadTime}</td>
                                <td><button className='btn btn-primary'><AiFillEdit /></button></td>
                                <td><button className='text-red-500'
                                 onClick={()=> dispatch(deleteContentData(content._id))}><BsFillTrashFill /></button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBlog;