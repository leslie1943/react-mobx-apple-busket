import React, { Component } from 'react'
import Todo from './Todo'
import AppBasket from './AppleBasket'

import { inject, observer } from 'mobx-react'

// 通过 inject 这个装饰器把 apple 对象注入到这个组件中的 props
@inject('store')
@observer
class App extends Component {
  constructor() {
    super()
    this.state = {
      part: 'apple',
    }
  }
  componentDidMount() {
    console.info(this.props)
  }
  onChangeFn = (e) => {
    console.info(e)
    this.setState({
      part: e.target.defaultValue,
    })
  }
  render() {
    return (
      <section>
        <div>
          <input
            type="radio"
            name="part"
            value="apple"
            checked={this.state.part === 'apple'}
            onChange={this.onChangeFn}
          />
          Apple
          <input
            type="radio"
            name="part"
            value="todo"
            checked={this.state.part === 'todo'}
            onChange={this.onChangeFn}
          />
          Todo
        </div>
        {this.state.part === 'todo' && <Todo />}
        {this.state.part === 'apple' && <AppBasket />}
      </section>
    )
  }
}

export default App
