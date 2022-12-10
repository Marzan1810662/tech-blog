import React from 'react';
import { useDispatch } from 'react-redux';
import addContentData from '../../../redux/thunk/content/addContentData';

const CreatBlog = () => {
    const dispatch = useDispatch();
    const date = new Date().toJSON();

    const submit = (e) => {
        e.preventDefault();
        const content = {
            title: e.target.title.value,
            mainContent: e.target.main_content.value,
            flags: [e.target.flag_1.value, e.target.flag_2.value, e.target.flag_3.value],
            uploadTime: date
        }
        console.log(content);

        dispatch(addContentData(content));
        
    }
    return (
        <div className='border-2 border-primary-focus p-4 w-1/2'>
            <form className='flex flex-col gap-3' onSubmit={submit}>
                <div>
                    <input type="text" placeholder="Blog Title" className="input input-bordered input-primary w-full" id='title' required={true} />
                </div>
                <div>
                    <textarea className="textarea textarea-primary w-full" id='main_content' rows='6' placeholder="Blog Content" required={true}></textarea>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-primary ml-2'>
                        <label htmlFor="tags">Tags</label>
                    </div>
                    <div id='tags' className='flex flex-col lg:flex-row gap-1'>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" id='flag_1' />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" id='flag_2' />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" id='flag_3' />
                    </div>
                </div>
                <div className='mx-auto'>
                    <input className='btn md:btn-wide btn-primary rounded-md mt-3 ' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default CreatBlog;