import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/gemma.png'
import card from '../../../assets/images/cards/gemma.jpg'

const Gemma = () => (
  <IdolDetails
    name="Gemma Izzy Lowe"
    skill="Doing My Rubesty"
    attribute="cool"
    card={card}
    fullCard="assets/cards/gemma.png"
  >
  </IdolDetails>
)

Gemma.Ring = () => (
  <img
    src={ring}
    alt="Gemma"
  />
)

export default Gemma
