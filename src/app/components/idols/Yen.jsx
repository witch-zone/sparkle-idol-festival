import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/yen.png'
import card from '../../../assets/images/cards/yen.jpg'

const Yen = () => (
  <IdolDetails
    name="Yen Quach"
    skill="A Real Troublemaker♡"
    attribute="smile"
    card={card}
    fullCard="assets/cards/yen.png"
  />
)

Yen.Ring = () => (
  <img
    src={ring}
    alt="Yen"
  />
)

export default Yen
