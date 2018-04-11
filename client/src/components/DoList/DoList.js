import React, { Component } from 'react'
import store from '../../services/store'
import './ToDoList.css'
import {connect} from 'react-redux'
import {getTodos} from '../../actions/todo'
import DoItem from '../DoItem/DoItem'
 
class DoList extends Component {
	componentDidMount() {
		getTodos(this.props.match.params.status)
	}

	static defaultProps = {
		todos: []
	}

	componentWillReceiveProps(newProps) {
		if (this.props.match.params.status !== newProps.match.params.status) {
			getTodos(newProps.match.params.status)
		}
	}

  render() {
    return (
     	<ul>
	        {this.props.todos.map(todo => (
	          <DoItem key={"todo" + todo.id} {...todo} />
	        ))}
      	</ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.createTaskReducer.todos
  }
}

export default connect(mapStateToProps)(DoList)

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