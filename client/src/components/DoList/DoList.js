import React, { Component } from 'react'
import store from '../../services/store'
import './ToDoList.css'

class DoList extends Component {
	state = {
		tasks: []
	}

	componentDidMount(){
		store.subscribe(() => {
			const state = store.getState()
			this.setState({
				tasks: state.tasks
			})
		})
	}

  render() {
    return (
      <div>
      	<ul>
      		{this.state.tasks.map(task =>{
      			return <li>{task}</li>
      		})}
      	</ul>
      </div>
    )
  }
}

export default DoList

// import React, {Component} from 'react'
// import './ToDoItems.css'
// import axios from 'axios'

// class NewItems extends Component {
// 	constructor(props) {
// 		super(props)
		

// 		this.createTasks = this.createTasks.bind(this)
// 	}
	

// 	createTasks(item) {
// 		// axios.post('http://localhost:3001/tasks', {
// 		// 	task: item.text,
// 		// 	key: item.key
// 		// })
		
// 		axios.get('http://localhost:3001/tasks').then( resp => {
// 			console.log(resp.data)
			
			
// 			return <li onClick={() => this.delete(resp.data.key)}
// 		key={resp.data.key}>{resp.data.text}</li>
// 		})
	
// 	}

// 	delete(key) {
// 		this.props.delete(key)
// 	}

// 	// mark(key) {
// 	// 	this.props.mark(key)
// 	// }

// 	render() {
// 		var todoEntries = this.props.entries
// 		var listItems = todoEntries.map(this.createTasks)

// 		return (
// 			<div id="newList">
// 				<ul className="bigList">
// 					{listItems}
// 				</ul>
// 			</div>
// 			)
// 	}
// }

// export default NewItems