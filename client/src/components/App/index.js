import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import DoForm from '../DoForm/DoForm'
import DoList from '../DoList/DoList'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <header>
            <h1>todos</h1>
          </header>

          <DoForm />
          <DoList />

        </div>
      </Router>
    )
  }
}

export default App
