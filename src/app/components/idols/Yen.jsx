import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/yen.png'
import card from '../../../assets/images/cards/yen.jpg'

const Yen = () => (
  <IdolDetails
    name="Yen Quach"
    skill=""
    attribute="smile"
    card={card}
    ring={ring}
  />
)

Yen.Ring = () => (
  <img
    src={ring}
    alt="Yen"
  />
)

export default Yen
