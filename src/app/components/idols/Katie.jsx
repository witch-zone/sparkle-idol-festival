import React from 'react'
import { Link } from 'react-router-dom'

import ring from 'preload-image!../../../assets/images/rings/katie.png'

const Katie = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Katie.Ring = () => (
  <img
    src={ring}
    alt="Katie"
  />
)

export default Katie
