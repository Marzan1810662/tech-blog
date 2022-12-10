import React from 'react';
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

const AllBlog = () => {
    return (
        <div className="overflow-x-auto w-5/6">
            <table className="table w-full text-primary-focus border">
                {/* <!-- head --> */}
                <thead className='text-primary-content'>
                    <tr>
                        <th></th>
                        <th>title</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    <tr className='border-2'>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td><AiFillEdit/></td>
                        <td><BsFillTrashFill/></td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr className='border'>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr className='border'>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllBlog;