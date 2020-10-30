import React from 'react'

const Card = ({children, title}) => (
  <div className="card">
    {title && <div className="card__title">{title}</div>}
    <div className="card__content">
      {children}
    </div>
  </div>
)

export default Card
