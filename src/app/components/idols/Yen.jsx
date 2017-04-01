import React from 'react'
import { Link } from 'react-router-dom'

import ring from '../../../assets/images/rings/yen.png'

const Yen = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Yen.Ring = () => (
  <img
    src={ring}
    alt="Yen"
  />
)

export default Yen
