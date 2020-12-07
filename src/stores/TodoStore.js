import { observable, configure, action, computed } from 'mobx'

// 🔰🔰 通过配置强制程序使用 action 函数更改应用程序中的状态 🔰🔰
configure({ enforceActions: 'observed' })

// 在 mobx 中, store 对象需要通过 class 来创建
class TodoStore {
  // todo 列表
  @observable todos = []
  // 筛选条件
  @observable filter = 'All'

  // 计算属性
  @computed get unDoneTodoCount() {
    return this.todos.filter((todo) => todo.isDone === false).length
  }

  // 添加任务
  @action.bound todoAdd(taskName) {
    this.todos.push({ taskName, isDone: false })
  }
  // 删除任务
  @action.bound todoDelete(index) {
    this.todos.splice(index, 1)
  }
  // 更改状态
  @action.bound todoChange(index, flag) {
    this.todos[index].isDone = flag
  }
  // 更改状态
  @action.bound todoClearDone() {
    this.todos = this.todos.filter((todo) => todo.isDone === false)
  }

  // 更改筛选条件
  @action.bound changeFilter(filter) {
    this.filter = filter
  }
  // 检测筛选条件的变化,根据变化对任务进行筛选
  @computed get filterTodo() {
    switch (this.filter) {
      case 'All':
        return this.todos
      case 'Active':
        return this.todos.filter((todo) => todo.isDone === false)
      case 'Done':
        return this.todos.filter((todo) => todo.isDone === true)

      default:
        return 'All'
    }
  }
}

// counter 就是 store 对象
const todo = new TodoStore()

export default todo
