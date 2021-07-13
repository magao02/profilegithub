
import React from 'react'
import {HashRouter} from 'react-router-dom'

import Routes from './routes'
import { ContextProvider } from '../context/context'
const App = (props) =>
  <ContextProvider>
  <HashRouter>
    <Routes />
  </HashRouter>
  </ContextProvider>
export default App
