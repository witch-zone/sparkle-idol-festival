import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/harley.png'
import card from '../../../assets/images/cards/harley.jpg'

const Harley = () => (
  <IdolDetails
    name="Harley Williams"
    skill="Busy As A Bee"
    attribute="cool"
    card={card}
    fullCard="assets/cards/harley.png"
  />
)

Harley.Ring = () => (
  <img
    src={ring}
    alt="Harley"
  />
)

export default Harley
