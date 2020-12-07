import React from 'react'
import { inject, observer } from 'mobx-react'

// 通过 inject 这个装饰器把 todo 对象注入到这个组件中的 props
@inject('store')
@observer
class AddTodo extends React.Component {
  addTodo = (event) => {
    // debugger
    // 判断用户敲击的是否是回车键
    if (event.key === 'Enter') {
      // 获取输入的内容
      const taskName = event.target.value
      // 内容是否为空
      if (taskName.trim().length === 0) {
        return
      }
      this.props.store.todo.todoAdd(taskName)
      // 清空
      event.target.value = ''
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyUp={(e) => this.addTodo(e)}
        />
      </header>
    )
  }
}

export default AddTodo
