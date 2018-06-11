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
