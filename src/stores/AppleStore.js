import { observable, configure, action, computed, runInAction } from 'mobx'

// 🔰🔰 通过配置强制程序使用 action 函数更改应用程序中的状态 🔰🔰
configure({ enforceActions: 'observed' })

class AppleStore {
  // 当前 列表
  @observable appleItems = []
  // 吃掉的列表
  @observable eatenItems = []
  // 按钮文字
  @observable buttonText = '摘苹果'
  // 采摘状态
  @observable buttonDisable = false
  // 计数器
  @observable counter = 0

  // 摘苹果
  @action.bound async addItem() {
    this.buttonText = '正在采摘...'
    this.buttonDisable = true
    this.counter = this.counter + 1
    const item = await generateApple(this.counter)
    // 如果你使用async function 来处理业务, 那么我们可以使用runInAction这个API来解决
    runInAction(() => {
      this.appleItems.push(item)
      this.buttonText = '摘苹果'
      this.buttonDisable = false
    })
  }
  // 吃苹果
  @action.bound eatItem(id) {
    const apple = this.appleItems.find((item) => item.id === id)
    apple.isEaten = true
  }
  // 未吃的苹果列表
  @computed get freshItems() {
    return this.appleItems.filter((apple) => apple.isEaten === false)
  }
  // 计算 未吃的个数
  @computed get notEatenQuantity() {
    return this.appleItems.filter((apple) => apple.isEaten === false).length
  }
  // 计算 未吃的重量
  @computed get notEatenWeight() {
    return this.appleItems
      .filter((apple) => apple.isEaten === false)
      .reduce((acc, cur) => {
        return acc + cur.weight
      }, 0)
  }
  // 计算 已吃的个数
  @computed get eatenQuantity() {
    return this.appleItems.filter((apple) => apple.isEaten === true).length
  }
  // 计算 已吃的重量
  @computed get eatenWeight() {
    return this.appleItems
      .filter((apple) => apple.isEaten === true)
      .reduce((acc, cur) => {
        return acc + cur.weight
      }, 0)
  }
}

function generateApple(counter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: counter,
        weight: Math.floor(Math.random() * 1000),
        isEaten: false,
      })
    }, 1000)
  })
}

const apple = new AppleStore()

export default apple
