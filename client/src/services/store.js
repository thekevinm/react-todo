import {createStore} from 'redux'
import createTaskReducer from '../reducers/createTaskReducer'

const store = createStore(createTaskReducer)

export default store

// import {createStore, combineReducers} from 'redux'
// import createTaskReducer from '../reducers/createTaskReducer'


// const store = createStore(createTaskReducer)
 

// export default store