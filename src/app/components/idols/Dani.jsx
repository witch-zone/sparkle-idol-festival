import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/dani.png'

const Dani = () => (
  <IdolDetails
    name="Dani"
  />
)

Dani.Ring = () => (
  <img
    src={ring}
    alt="Dani"
  />
)

export default Dani
