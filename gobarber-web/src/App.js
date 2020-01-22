import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import 'configs/ReactotronConfig'

import Routes from 'routes'
import { store, persistor } from './store'

import GlobalStyle from './assets/styles/global'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </PersistGate>
  </Provider>
)

export default App
