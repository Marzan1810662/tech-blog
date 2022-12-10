import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes"

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
export const deleteContent = (_id) =>{
    return{
        type: DELETE_CONTENT,
        payload: _id
    }
}
