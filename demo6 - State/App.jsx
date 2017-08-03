import React from 'react'
import TodoList from './TodoList.jsx'

const todos = [{
      title: '吃飯',
      isCompleted: true
    }, {
      title: '洗澡',
      isCompleted: false
    }, {
      title: '睡覺',
      isCompleted: false
    }]
class App extends React.Component {
  handleAddTodo = () => {
    this.setState({
      todos: this.state.todos.concat({
        title: 'new todo',
        isCompleted: false
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoList todos={todos}/>
        <button onClick={this.handleAddTodo}>add todo</button>
      </div>
    );
  }
}

export default App;