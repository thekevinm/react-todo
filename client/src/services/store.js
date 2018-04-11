import {createStore, combineReducers} from 'redux'
import createTaskReducer from '../reducers/createTaskReducer'

const rootReducer = combineReducers(
	{
		createTaskReducer
	}
)

export default createStore(rootReducer)

// import {createStore, combineReducers} from 'redux'
// import createTaskReducer from '../reducers/createTaskReducer'


// const store = createStore(createTaskReducer)
 

// export default store