const initialState = {
	tasks: []
}

export default function(state = initialState, action){
	switch(action.type) {
		case 'ADD_TODO' :
			return {...state, tasks:[...state.tasks, action.task]}
		default:
			return state
	}
}

// const initialState ={
// 	tasks: [],
// 	task: "",
// 	key: ""
// }

// export default function(state = initialState, action) {
// 	switch(action.type) {
// 		case 'MAKE_TASKS':
// 		return {...state, task: action.payload}
// 		case 'GET_TASKS':
// 		return {...state, tasks: action.payload}
// 		default:
// 		return state
// 	}
// }