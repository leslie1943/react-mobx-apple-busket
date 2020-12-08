import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

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
          <li style={{ paddingRight: 10 }}>
            <Button
              type={filter === 'All' ? 'primary' : 'dashed'}
              onClick={() => changeFilter('All')}
            >
              All
            </Button>
          </li>
          <li style={{ paddingRight: 10 }}>
            <Button
              type={filter === 'Active' ? 'primary' : 'dashed'}
              onClick={() => changeFilter('Active')}
            >
              Active
            </Button>
          </li>
          <li style={{ paddingRight: 10 }}>
            <Button
              type={filter === 'Done' ? 'primary' : 'dashed'}
              onClick={() => changeFilter('Done')}
            >
              Completed
            </Button>
          </li>
        </ul>

        <Button danger onClick={todoClearDone} className="clear-completed">
          Clear completed
        </Button>
      </footer>
    )
  }
}

export default TodoExtra
