import { ADD_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes"

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
