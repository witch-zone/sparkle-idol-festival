import React from 'react'
import { Link } from 'react-router-dom'

import ring from '../../../assets/images/rings/danni.png'

const Danni = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Danni.Ring = () => (
  <img
    src={ring}
    alt="Danni"
  />
)

export default Danni
