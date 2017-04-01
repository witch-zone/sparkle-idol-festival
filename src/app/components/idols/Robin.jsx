import React from 'react'
import { Link } from 'react-router-dom'

import ring from 'preload-image!../../../assets/images/rings/robin.png'

const Robin = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Robin.Ring = () => (
  <img
    src={ring}
    alt="Robin"
  />
)

export default Robin
