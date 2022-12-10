import { loadContents } from "../../actions/contentActions";

const fetchAllContentsData = () =>{
    return async(dispatch,getState) =>{
        const res = await fetch('https://tech-blog-server-eight.vercel.app/blogs');
        const data = await res.json();

        if(data.data.length){
            dispatch(loadContents(data.data))
        }
    }
}

export default fetchAllContentsData;