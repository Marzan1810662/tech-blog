import { deleteContent } from "../../actions/contentActions";

const deleteContentData = (_id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://tech-blog-server-eight.vercel.app/blog/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(deleteContent(_id));
        }

    }
}

export default deleteContentData;