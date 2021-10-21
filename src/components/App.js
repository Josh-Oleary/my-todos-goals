import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { handleInitialData } from '../actions/shared'
import './App.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    if(this.props.loading === true) {
      return <h3>Loading...</h3>
    }
    return (
      <div className='page-container'>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default connect((store) => ({
  loading: store.loading
}))(App)
