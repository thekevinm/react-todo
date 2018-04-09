import store from '../services/store'
import axios from 'axios'

export function makeToDo(task){
	store.dispatch({
		type: 'MAKE_TASKS',
		task: task

	})
}

// axios.post('http://localhost:3001/tasks', item).then(resp => {
// 		store.dispatch({
// 			type: 'MAKE_TASKS',
// 			payload: resp.data
// 		})
// 	})	



// import store from '../services/store'
// import axios from 'axios'

// export function makeTasks(text) {
// 	const item = {
// 		task: text,
// 		isCompleted: false
// 	}
// 	axios.post('http://localhost:3001/tasks', item).then(resp => {
// 		store.dispatch({
// 			type: 'MAKE_TASKS',
// 			payload: resp.data
// 		})
// 	})	
// }

// export function getTasks(item) {
// 	axios.get('http://localhost:3001/tasks').then(resp => {
// 		store.dispatch({
// 			type: 'GET_TASKS',
// 			payload: resp.data
// 		})
// 	})
// }