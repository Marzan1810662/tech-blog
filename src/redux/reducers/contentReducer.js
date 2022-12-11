import {
    ADD_CONTENT,
    ADD_TO_READING_HISTORY,
    ADD_UPDATE_CONTENT,
    DELETE_CONTENT,
    GET_CONTENT,
    GET_SINGLE_CONTENT,
    SORT_BY_FIRST_UPLOAD,
    SORT_BY_LAST_UPLOAD,
    TOGGLE_TAG,
    UPDATE_CONTENT
} from "../actionTypes/actionTypes";

const initialState = {
    contents: [],
    content: {},
    editContent: {},
    readingHistory: [],
    tags: []
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTENT:
            return {
                ...state,
                contents: [...state.contents, action.payload]
            }
        case SORT_BY_LAST_UPLOAD:
        case SORT_BY_FIRST_UPLOAD:
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
            if (state.readingHistory.find(content => content._id === action.payload._id)) {
                state.readingHistory.forEach(content => content.position = content.position + 1)
                const newReadingHistory = state.readingHistory.filter(content => content._id !== action.payload._id);
                console.log(newReadingHistory);
                return {
                    ...state,
                    readingHistory: [...newReadingHistory, { position: 0, ...action.payload }]
                }
            }
            return {
                ...state,
                readingHistory: [...state.readingHistory, { position: state.readingHistory.length, ...action.payload }]
            }
        case TOGGLE_TAG:
            if (!state.tags.includes(action.payload)) {
                return {
                    ...state,
                    tags: [...state.tags, action.payload]
                }
            }
            return {
                ...state,
                tags: state.tags.filter(tag => tag !== action.payload)
            }
        default:
            return state;
    }
}

export default contentReducer;