import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './index.css'
import {addTodo, clearCompleted} from '../../actions/todo'
import DoList from '../DoList/DoList'


class App extends Component {
  state = {
    todoText: ''
  }

  handleChange = (e) => {
    this.setState({
      todoText: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.todoText !== '') {
      addTodo(this.state.todoText)
      this.setState({
        todoText: ''
      })
    }
  }

  clearCompleted = (e) => {
    e.preventDefault()
    clearCompleted()
  }


  render() {
    return (
      <Router>
      <div>

      <div className="header">
      <h3>todos</h3>
      </div>

        <div className="name">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.todoText} onChange={this.handleChange} placeholder="What Needs To Get Done?" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="stuff">
          <Route path="/:status?" exact component={DoList} />
        </div>
      </div>
      </Router>
    )
  }
}

export default App
