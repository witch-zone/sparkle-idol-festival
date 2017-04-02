import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/dani.png'
import card from '../../../assets/images/cards/dani.jpg'

const Dani = () => (
  <IdolDetails
    name="Dani Quinn Sexton"
    skill="Spooky Sweet Royalty"
    attribute="pure"
    card={card}
    fullCard="assets/cards/dani.png"
  />
)

Dani.Ring = () => (
  <img
    src={ring}
    alt="Dani"
    role="presentation"
  />
)

export default Dani
