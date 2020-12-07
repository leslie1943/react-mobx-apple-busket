import React, { Component } from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'
import TodoExtra from './todoExtra'

import { inject, observer } from 'mobx-react'

// 通过 inject 这个装饰器把 apple 对象注入到这个组件中的 props
@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <section>
        <AddTodo />
        <TodoList />
        <TodoExtra />
      </section>
    )
  }
}

export default App
