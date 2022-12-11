import React, { useEffect } from 'react';
import Navbar from '../../components/navbar.js/Navbar';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import fetchAllContentsData from '../../redux/thunk/content/fetchAllContentsData';
import ContentCard from '../../components/ContentCard';
import { sortByFirstUpload, sortByLastUpload } from '../../redux/actions/contentActions';

const Home = () => {
    const dispatch = useDispatch()
    const { contents, tags } = useSelector(state => state);

    const date = new Date().toJSON;


    let pageContent;
    useEffect(() => {
        dispatch(fetchAllContentsData())
    }, []);

    if (contents.length) {
        pageContent = contents.length && contents.map(content =>
            <ContentCard key={content._id} content={content} />)
    }

    /*  if (contents.length && tags.length) {
         pageContent = contents.length && contents.filter(content => {
             tags.forEach(tag => {
                 if (content.flags.find(flag => flag === tag)) {
                     return true;
                 }
             })
             return content;
         }
 
         ).map(content =>
            <ContentCard  key={content._id} content={content}/>)
     } */




    return (
        <div className='flex flex-col gap-4'>
            <Navbar />
            <div className='flex justify-end pr-11'>
                <span className='flex items-center justify-center gap-1'>
                    <span>Sort By Upload</span>
                    <span className='cursor-pointer' title='sort by first upload' onClick={()=> dispatch(sortByFirstUpload(contents))}><AiOutlineArrowDown /></span>
                    <span className='cursor-pointer' title='sort by last upload' onClick={()=> dispatch(sortByLastUpload(contents))}><AiOutlineArrowUp /></span>
                </span>
            </div>
            <div className='flex flex-wrap gap-5 justify-around'>
                {pageContent}
            </div>
        </div >
    );
};

export default Home;