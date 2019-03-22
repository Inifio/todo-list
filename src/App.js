import React, { Component } from 'react';
import SingleTodo from './SingleTodo';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      todo: [],
      currentTodo: " "
    }
  }

  handleChange = event => {
    this.setState({currentTodo: event.target.value})
  }

  onClick = () => {
    let todosCopy = this.state.todo.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todo: todosCopy });
    this.setState({currentTodo: ""});
  }

  deleteTodo = i => {
    let todoCopy = this.state.todo.slice();

    todoCopy.splice(i, 1);

    this.setState({ todo: todoCopy });
  }

  render() {
    let bulletedTodo = this.state.todo.map((e, i) => {
      return(
        <SingleTodo todo={e} delete={() => this.deleteTodo(i)} />
      );
    });
    return(
      <div>
        <input placeholder="Something todo?" value={this.state.currentTodo} onChange={this.handleChange} />
        <button onClick={this.onClick}>Add to Todo</button>
        <br />
        {this.state.todo.length === 0 ? 'Nothing to do! \\o/' : <ul>{bulletedTodo}</ul> }
      </div>
    );
  }

}

export default App;