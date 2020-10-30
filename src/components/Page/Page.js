import React from 'react'

const Page = ({children, centered}) => (
  <div>
    <div className="header">
      <h1>Family Tree</h1>
    </div>
    <div className="content">
      <div className={`page${centered ? ' page--centered' : ''}`}>{children}</div>
    </div>
  </div>
)

export default Page
