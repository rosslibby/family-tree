import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'styles/app.scss'

const App = () => (
  <Router>
    <Route exact path="/">
      <div>Home</div>
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
