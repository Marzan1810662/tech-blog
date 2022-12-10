import { updateContent } from "../../actions/contentActions";

const updateContentData = (content, _id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://tech-blog-server-eight.vercel.app/blog/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify(content),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(updateContent({
                _id: _id,
                ...content
            }));
        }

    }
}

export default updateContentData;