import React, { useEffect } from 'react';
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_UPDATE_CONTENT } from '../../../redux/actionTypes/actionTypes';
import deleteContentData from '../../../redux/thunk/content/deleteContentData';
import fetchAllContentsData from '../../../redux/thunk/content/fetchAllContentsData';
import updateContentData from '../../../redux/thunk/content/updateContentData';

const AllBlog = () => {
    const dispatch = useDispatch()
    const { contents, editContent } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchAllContentsData())
    }, []);

    const modalSubmit = (e) => {
        e.preventDefault();
        const content = {
            title: e.target.title.value,
            mainContent: e.target.main_content.value,
            flags: [e.target.flag_1.value, e.target.flag_2.value, e.target.flag_3.value],
            uploadTime: editContent.uploadTime
        }
        console.log(content);

        dispatch(updateContentData(content,editContent._id));
    }
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
                                <td><label htmlFor="my-modal-3" className="btn btn-primary"
                                    onClick={() => dispatch({ type: ADD_UPDATE_CONTENT, payload: content })}><AiFillEdit /></label></td>
                                <td><button className='text-red-500'
                                    onClick={() => dispatch(deleteContentData(content._id))}><BsFillTrashFill /></button></td>
                            </tr>)
                    }
                </tbody>
            </table>

            {/* modal */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-5xl relative lg:absolute lg:right-12">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='border-2 border-primary-focus p-4 w-full'>
                        <form className='flex flex-col gap-3' onSubmit={modalSubmit}>
                            <div>
                                <input type="text" placeholder="Blog Title" className="input input-bordered input-primary w-full" id='title' required={true} defaultValue={editContent?.title} />
                            </div>
                            <div>
                                <textarea className="textarea textarea-primary w-full" id='main_content' rows='6' placeholder="Blog Content" required={true} defaultValue={editContent?.mainContent}></textarea>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='text-primary ml-2'>
                                    <label htmlFor="tags">Tags</label>
                                </div>
                                <div id='tags' className='flex flex-col lg:flex-row gap-1'>
                                    {
                                        editContent.flags?.map((flag, index) => <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" id={`flag_${++index}`} defaultValue={flag} />)
                                    }
                                </div>
                            </div>
                            <div className='mx-auto'>
                                <input className='btn md:btn-wide btn-primary rounded-md mt-3 ' type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;