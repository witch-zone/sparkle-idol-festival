import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/robin.png'
import card from '../../../assets/images/cards/robin.jpg'

const Robin = () => (
  <IdolDetails
    name="Robin Rosell"
    skill="Muscle Princess"
    attribute="cool"
    card={card}
    fullCard="assets/cards/robin.png"
  />
)

Robin.Ring = () => (
  <img
    src={ring}
    alt="Robin"
  />
)

export default Robin
