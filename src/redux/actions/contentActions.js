import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, GET_SINGLE_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const addContent = (content) =>{
    return{
        type: ADD_CONTENT,
        payload: content
    }
}
export const loadContents = (contents) =>{
    return{
        type: GET_CONTENT,
        payload: contents
    }
}
export const loadSingleContent = (content) =>{
    return{
        type: GET_SINGLE_CONTENT,
        payload: content
    }
}
export const updateContent = (content) =>{
    return{
        type: UPDATE_CONTENT,
        payload: content
    }
}
export const deleteContent = (_id) =>{
    return{
        type: DELETE_CONTENT,
        payload: _id
    }
}
