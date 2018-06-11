import React, {Component} from 'react'
import './Home.css'
import {removeTodo, markAsComplete} from '../../actions/todo'

class DoItem extends Component {
	remove = (e) => {
		e.preventDefault()
		removeTodo(this.props.id)
	}

	complete = (e) => {
		e.preventDefault()
		markAsComplete(this.props.id, !this.props.complete)
	}

	render() {
		return (
			<li className="todo">
       			<button className="adjust" onClick={this.remove}>X</button><p className="doMe">{this.props.text}</p>
      		</li>
		)
	}
}
export default DoItem

