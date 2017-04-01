import React from 'react'
import { Link } from 'react-router-dom'

import ring from '../../../assets/images/rings/harley.png'

const Harley = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Harley.Ring = () => (
  <img
    src={ring}
    alt="Harley"
  />
)

export default Harley
