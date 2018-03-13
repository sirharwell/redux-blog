import React from 'react';
import { connect } from 'react-redux';
import { incId } from './actions/nextId';
import { addTodo } from './actions/todos';

class TodoForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { name } = this.state
    const todo = { name, id, complete: false }
    dispatch(addTodo(todo))
      dispatch(incId())
          this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  getRandomColor() {
    var letters = '789ABCD';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
  }

  render() {
    const { name } = this.state

    return (
      <div background-color={this.getRandomColor}>
        <h3>Add A Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
          <div/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(TodoForm);
