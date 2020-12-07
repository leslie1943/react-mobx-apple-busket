import React from 'react'
import { inject, observer } from 'mobx-react'

// 通过 inject 这个装饰器把 todo 对象注入到这个组件中的 props
@inject('store')
@observer
class TodoExtra extends React.Component {
  render() {
    const {
      unDoneTodoCount,
      changeFilter,
      filter,
      todoClearDone,
    } = this.props.store.todo
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{unDoneTodoCount}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <button
              className={filter === 'All' ? 'selected' : ''}
              onClick={() => changeFilter('All')}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={filter === 'Active' ? 'selected' : ''}
              onClick={() => changeFilter('Active')}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={filter === 'Done' ? 'selected' : ''}
              onClick={() => changeFilter('Done')}
            >
              Completed
            </button>
          </li>
        </ul>

        <button onClick={todoClearDone} className="clear-completed">
          Clear completed
        </button>
      </footer>
    )
  }
}

export default TodoExtra
