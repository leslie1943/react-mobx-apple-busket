import React, { Component } from 'react'
import Todo from './Todo'
import AppBasket from './AppleBasket'
import { Radio } from 'antd'

import { inject, observer } from 'mobx-react'

// 通过 inject 这个装饰器把 apple 对象注入到这个组件中的 props
@inject('store')
@observer
class App extends Component {
  constructor() {
    super()
    this.state = {
      show: 'apple',
    }
  }
  componentDidMount() {
    console.info(this.props)
  }
  onChangeFn = (e) => {
    console.info(e)
    this.setState({
      show: e.target.value,
    })
  }
  render() {
    return (
      <section>
        <div>
          <Radio.Group onChange={this.onChangeFn} value={this.state.show}>
            <Radio value="apple">Show Apple demo</Radio>
            <Radio value="todo">Show todo demo</Radio>
          </Radio.Group>
          {/* <input
            type="radio"
            name="part"
            value="apple"
            checked={this.state.show === 'apple'}
            onChange={this.onChangeFn}
          />
          Apple
          <input
            type="radio"
            name="part"
            value="todo"
            checked={this.state.show === 'todo'}
            onChange={this.onChangeFn}
          />
          Todo*/}
        </div>
        {this.state.show === 'todo' && <Todo />}
        {this.state.show === 'apple' && <AppBasket />}
      </section>
    )
  }
}

export default App
