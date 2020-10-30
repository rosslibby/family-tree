import React from 'react'
import { Link } from 'react-router-dom'

const Page = ({children, centered}) => (
  <div>
    <div className="header">
      <h1><Link to="/">Family Tree</Link></h1>
      <Link to="/settings">Profile</Link>
    </div>
    <div className="content">
      <div className={`page${centered ? ' page--centered' : ''}`}>{children}</div>
    </div>
  </div>
)

export default Page
