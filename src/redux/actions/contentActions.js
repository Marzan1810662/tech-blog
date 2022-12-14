import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, GET_SINGLE_CONTENT, SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD, TOGGLE_TAG, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const addContent = (content) => {
    return {
        type: ADD_CONTENT,
        payload: content
    }
}
export const loadContents = (contents) => {
    return {
        type: GET_CONTENT,
        payload: contents
    }
}
export const loadSingleContent = (content) => {
    return {
        type: GET_SINGLE_CONTENT,
        payload: content
    }
}
export const updateContent = (content) => {
    return {
        type: UPDATE_CONTENT,
        payload: content
    }
}
export const deleteContent = (_id) => {
    return {
        type: DELETE_CONTENT,
        payload: _id
    }
}

export const toggleTag = (tag) => {
    return {
        type: TOGGLE_TAG,
        payload: tag
    }
}
export const sortByFirstUpload = (contents) => {
    //console.log(contents.sort((a, b) => Date.parse(a.uploadTime) - Date.parse(b.uploadTime)));
    return {
        type: SORT_BY_FIRST_UPLOAD,
        payload: contents.sort((a, b) => Date.parse(a.uploadTime) - Date.parse(b.uploadTime))
    }
}
export const sortByLastUpload = (contents) => {
    //console.log(contents.sort((a, b) => Date.parse(b.uploadTime) - Date.parse(a.uploadTime)))
    return {
        type: SORT_BY_LAST_UPLOAD,
        payload: contents.sort((a, b) => Date.parse(b.uploadTime) - Date.parse(a.uploadTime))
    }
}
