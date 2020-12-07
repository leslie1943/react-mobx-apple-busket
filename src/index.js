import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'mobx-react'
// import apple from './stores/AppleStore'
import { rootStore } from './stores/RootStore'
import './index.css'
import './styles/appleBasket.css'
import './styles/appleItem.css'

ReactDOM.render(
  <Provider store={rootStore}>
    <div
      style={{
        marginTop: '50px',
      }}
    >
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
