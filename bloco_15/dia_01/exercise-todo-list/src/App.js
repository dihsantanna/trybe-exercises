import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      taskSelected: '',
      disableRemove: true,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.selectTask = this.selectTask.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTodo() {
    const { taskSelected, listTodo } = this.state;
    const newTodoList = listTodo.filter((todo) => todo !== taskSelected);
    this.setState({
      listTodo: [...newTodoList],
      taskSelected: '',
      disableRemove: true,
    });
  }

  selectTask({ target }) {
    const text = target.innerText;
    const { taskSelected } = this.state;
    if (text === taskSelected) {
      return this.setState({
        taskSelected: '',
        disableRemove: true,
      })
    }
    this.setState({
      taskSelected: text,
      disableRemove: false,
    })
  }

  render() {
    const { listTodo, taskSelected, disableRemove } = this.state;
    return (
      <div className="App">
        <InputTodo
          addTodo={(todo) => this.addTodo(todo)}
          removeTodo={ this.removeTodo }
          disabledRemove={ disableRemove }
        />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li
                  key={index + 1}
                >
                  <Item
                    content={todo}
                    style={ taskSelected === todo
                      ? { background: 'silver' }
                      : { background: 'white' } }
                    onClick={ this.selectTask }
                  />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
