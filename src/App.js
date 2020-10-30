import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'pages/Home'

import 'styles/app.scss'

const App = () => (
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/person/:id">
      <div>Person</div>
    </Route>
    <Route path="/settings">
      <div>Settings</div>
    </Route>
  </Router>
)

export default App
