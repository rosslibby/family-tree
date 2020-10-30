import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Person from 'pages/Person'

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
      <div>Settings</div>
    </Route>
  </Router>
)

export default App
