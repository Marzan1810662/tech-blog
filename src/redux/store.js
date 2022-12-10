import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import contentReducer from './reducers/contentReducer';

const store = createStore(contentReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;