import React, { Component } from 'react'
// import AddTodo from './addTodo'
// import TodoList from './todoList'
// import TodoExtra from './todoExtra'
import AppBasket from './AppleBasket'

import { inject, observer } from 'mobx-react'

// 通过 inject 这个装饰器把 apple 对象注入到这个组件中的 props
@inject('apple')
@observer
class App extends Component {
  componentDidMount() {
    console.info(this.props)
  }
  render() {
    return (
      <section>
        {/* <AddTodo />
        <TodoList />
        <TodoExtra /> */}
        <AppBasket />
      </section>
    )
  }
}

export default App
