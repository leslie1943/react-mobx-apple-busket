import React from 'react'
import { inject, observer } from 'mobx-react'
import img from '../images/apple.png'
import AppleEmpty from './AppleEmpty'

// 通过 inject 这个装饰器把 todo 对象注入到这个组件中的 props
@inject('store')
@observer
class AppleItem extends React.Component {
  render() {
    const { freshItems, eatItem } = this.props.store.apple
    return (
      <div>
        {freshItems.length > 0 ? (
          freshItems.map((apple) => (
            <div className="appleItem" key={apple.id}>
              <div className="apple">
                <img src={img} alt="" />
              </div>
              <div className="info">
                <div className="name">红苹果 - {apple.id}号</div>
                <div className="weight">{apple.weight}克</div>
              </div>
              <div className="btn-div">
                <button onClick={() => eatItem(apple.id)}> 吃掉 </button>
              </div>
            </div>
          ))
        ) : (
          <AppleEmpty />
        )}
      </div>
    )
  }
}

export default AppleItem
