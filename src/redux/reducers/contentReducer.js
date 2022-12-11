import { ADD_CONTENT, ADD_TO_READING_HISTORY, ADD_UPDATE_CONTENT, DELETE_CONTENT, GET_CONTENT, GET_SINGLE_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    contents: [],
    content: {},
    editContent: {},
    readingHistory: []
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
        case GET_SINGLE_CONTENT:
            return {
                ...state,
                content: action.payload
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
        case ADD_TO_READING_HISTORY:
            return {
                ...state,
                readingHistory: [...state.readingHistory.filter(content => content._id !== action.payload._id),
                state.readingHistory.find(content => content._id === action.payload._id) ? { position: 0, ...action.payload } : { position: state.readingHistory.length + 1, ...action.payload }]
            }
        default:
            return state;
    }
}

export default contentReducer;