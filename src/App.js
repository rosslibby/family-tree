import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Person from 'pages/Person'
import Settings from 'pages/Settings'

import 'styles/app.scss'

const App = () => (
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/person/:id">
      <Person />
    </Route>
    <Route path="/settings">
      <Settings />
    </Route>
  </Router>
)

export default App
