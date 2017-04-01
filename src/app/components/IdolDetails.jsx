import React from 'react'
import { Link } from 'react-router-dom'

const IdolDetails = ({
  name,
}) => (
  <div className="o-page">
    <header>
      <h1 className="c-title">
        Scout
      </h1>
    </header>

    {name}

    <Link to="/">back</Link>
  </div>
)

export default IdolDetails
