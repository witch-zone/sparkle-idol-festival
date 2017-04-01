import React from 'react'
import { Link } from 'react-router-dom'

import ring from '../../../assets/images/rings/saffron.png'

const Saffron = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Saffron.Ring = () => (
  <img
    src={ring}
    alt="Saffron"
  />
)

export default Saffron
