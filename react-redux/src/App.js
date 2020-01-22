import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import 'configs/ReactotronConfig'

import store from 'store'
import Routes from 'routes'
import history from 'services/history'

import GlobalStyle from 'assets/styles/global'
import Header from 'components/Header'

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  )
}

export default App
