import { createStore, applyMiddleware } from 'redux'
import newsReducer from './reducers/news'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(newsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store