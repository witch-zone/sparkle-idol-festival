import React from 'react'
import { Link } from 'react-router-dom'

import ring from 'preload-image!../../../assets/images/rings/michaela.png'

const Michaela = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Michaela.Ring = () => (
  <img
    src={ring}
    alt="Michaela"
  />
)

export default Michaela
