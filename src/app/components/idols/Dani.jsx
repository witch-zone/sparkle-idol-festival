import React from 'react'
import { Link } from 'react-router-dom'

import ring from 'preload-image!../../../assets/images/rings/dani.png'

const Dani = () => (
  <div>
    <p>Hello this is a page about dani and how she is a good idol and deserves treats and bread. Her skill is treats and bread</p>
    <Link to="/">back</Link>
  </div>
)

Dani.Ring = () => (
  <img
    src={ring}
    alt="Dani"
  />
)

export default Dani
