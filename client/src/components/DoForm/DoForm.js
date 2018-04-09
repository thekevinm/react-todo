import React, {Component} from 'react'
import './Home.css'
import {makeToDo} from '../../actions/todo'

class DoForm extends Component {
	state = {
		task: ''
	}
	handleSubmit = (e) => {
		e.preventDefault()
		makeToDo({
			task: this.state.task,
			value: ''
		})
		console.log(this.state.todo)
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(this.state)
	}

	render() {
		return (
			<div className="addContainer">
			<form onSubmit={this.handleSubmit}>
				<input type="text" onChange={this.handleChange} name="todo" placeholder="What Needs To Get Done?" />
				<button type="submit">Add</button>
			</form>
			</div>
		)
	}
}
export default DoForm

// import React, {Component} from 'react'
// // import {Link} from 'react-router-dom'
// import './Home.css'
// import NewItems from '../ToDoItems/ToDoItems'
// import { getTasks, makeTasks } from '../../actions/createTaskAction'

// class Home extends Component {
// 	state = {
// 		text: ''
// 	}

// 	addItem = this.addItem.bind(this)
// 	deleteItem = this.deleteItem.bind(this)
// 	// markItem = this.markItem.bind(this)

// 	addItem(e) {

// 		makeTasks(this.state.text)

// 		if (this._inputElement.value !== "") {
// 			var newItem = {
// 				text: this._inputElement.value,
// 				key: Date.now()
// 			}

// 			this.setState((prevState) => {
// 				return {
// 					items: prevState.items.concat(newItem)
// 				}
// 			})
// 		}
// 		this._inputElement.value = ""
// 		console.log(this.state.items)
// 		e.preventDefault()

// 	}

// 	deleteItem(key) {
// 		var filteredItems = this.state.items.filter(function (item) {
// 			return (item.key !== key)
// 		})
// 		this.setState({
// 			items: filteredItems
// 		})
// 	}

// 	handleChange = (e) => {
// 		this.setState({
// 			text: e.target.value
// 		})
// 	}

// 	// markItem(key) {
// 	// 	var filteredItems = this.state.items.filter(function (item) {
// 	// 		return (item.key !== key)
// 	// 	})
// 	// 	this.setState({
// 	// 		items: filteredItems
// 	// 	})
// 	// }

// 	render() {
// 		return (
// 			<div>

//         		<div id="doContainer">
//         			<form onSubmit={this.addItem}>
//         				<input onChange={this.handleChange} value={this.state.text} type="text" id="whatTodo" ref={(a) => this._inputElement = a} placeholder="What Needs To Be Done?" autoComplete="off" />
//         				<button type="submit">Add</button>
//         			</form>
//         		</div>

//         		<NewItems entries={this.state.items} delete={this.deleteItem} />

// 			</div>
// 		)
// 	}
// }

// export default Home