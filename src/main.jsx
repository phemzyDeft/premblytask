import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import store, { Jsondata } from "../src/store/data.js"
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={Jsondata}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApiProvider>
)
