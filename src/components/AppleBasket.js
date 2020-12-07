import React from 'react'
import AppleItem from './AppleItem'
import { inject, observer } from 'mobx-react'

// 通过 inject 这个装饰器把 todo 对象注入到这个组件中的 props
@inject('store')
@observer
class AppleBusket extends React.Component {
  render() {
    const {
      buttonText,
      addItem,
      buttonDisable,
      notEatenQuantity,
      notEatenWeight,
      eatenQuantity,
      eatenWeight,
    } = this.props.store.apple
    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">
              {notEatenQuantity}个苹果，{notEatenWeight}克
            </div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">
              {eatenQuantity}个苹果，{eatenWeight}克
            </div>
          </div>
        </div>

        <div className="appleList">
          <AppleItem />
        </div>

        <div className="btn-div">
          <button
            disabled={buttonDisable}
            className={buttonDisable ? 'disabled' : ''}
            onClick={addItem}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default AppleBusket
