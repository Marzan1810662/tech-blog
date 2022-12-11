import { loadSingleContent } from "../../actions/contentActions";

const fetchSingleContentData = (_id) =>{
    return async(dispatch,getState) =>{
        const res = await fetch(`https://tech-blog-server-eight.vercel.app/blog/${_id}`);
        const data = await res.json();

        if(data.data){
            dispatch(loadSingleContent(data.data))
        }
    }
}

export default fetchSingleContentData;