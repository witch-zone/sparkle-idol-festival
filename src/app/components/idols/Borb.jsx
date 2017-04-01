import React from 'react'
import { Link } from 'react-router-dom'

import ring from '../../../assets/images/rings/borb.png'

const Borb = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Borb.Ring = () => (
  <img
    src={ring}
    alt="Borb"
  />
)

export default Borb
