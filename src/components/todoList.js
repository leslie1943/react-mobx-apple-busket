import React from 'react'
import { inject, observer } from 'mobx-react'

// 通过 inject 这个装饰器把 todo 对象注入到这个组件中的 props
@inject('todo')
@observer
class TodoList extends React.Component {
  render() {
    const { filterTodo, todoDelete, todoChange } = this.props.todo
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {filterTodo.map((todo, index) => (
            <li key={todo.taskName} className={todo.isDone ? 'completed' : ''}>
              <div className="view">
                <input
                  checked={todo.isDone}
                  className="toggle"
                  type="checkbox"
                  onChange={(event) => todoChange(index, event.target.checked)}
                />
                <label>{todo.taskName}</label>
                <button
                  onClick={() => todoDelete(index)}
                  className="destroy"
                ></button>
              </div>
              <input className="edit" />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default TodoList
