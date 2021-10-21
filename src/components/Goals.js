import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals'
import './SectionStyles.css'

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddGoal(
      this.input.value,
      () => {
        this.input.value = ''
      }
    )) 
  }

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }

  render(){
    return(
      <div className='section-container'>
        <h1 className='section-header'>Goals</h1>
        <input 
          className='section-input'
          type="text"
          placeholder="Add Goal"
          ref={(input) => this.input = input}
        />
        <button className='input-button' onClick={this.addItem}>Add Goal</button>

        <List 
          items={this.props.goals}
          remove={this.removeItem}  
        />
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)