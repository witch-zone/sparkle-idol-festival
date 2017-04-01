import React from 'react'
import { Link } from 'react-router-dom'

import ring from '../../../assets/images/rings/gemma.png'

const Gemma = () => (
  <div>
    <Link to="/">back</Link>
  </div>
)

Gemma.Ring = () => (
  <img
    src={ring}
    alt="Gemma"
  />
)

export default Gemma
