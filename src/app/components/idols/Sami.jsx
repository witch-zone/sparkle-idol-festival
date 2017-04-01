import React from 'react'
import { Link } from 'react-router-dom'

import ring from '../../../assets/images/rings/sami.png'

const Sami = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Sami.Ring = () => (
  <img
    src={ring}
    alt="Sami"
  />
)

export default Sami
