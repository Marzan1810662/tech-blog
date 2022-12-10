import { ADD_CONTENT, ADD_UPDATE_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    contents: [],
    editContent: {}
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTENT:
            return {
                ...state,
                contents: [...state.contents, action.payload]
            }
        case GET_CONTENT:
            return {
                ...state,
                contents: action.payload
            }
        case ADD_UPDATE_CONTENT:
            return {
                ...state,
                editContent: action.payload
            }
        case UPDATE_CONTENT:
            return {
                ...state,
                contents: [...state.contents.filter(content => content._id !== action.payload._id), action.payload]
            }
        case DELETE_CONTENT:
            return {
                ...state,
                contents: [...state.contents.filter(content => content._id !== action.payload)]
            }
        default:
            return state;
    }
}

export default contentReducer;