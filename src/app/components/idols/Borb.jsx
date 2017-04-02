import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/borb.png'
import card from '../../../assets/images/cards/borb.jpg'

const Borb = () => (
  <IdolDetails
    name="Bat Orb"
    skill="Everybody loves them!"
    attribute="all"
    card={card}
    fullCard="assets/cards/borb.png"
  />
)

Borb.Ring = () => (
  <img
    src={ring}
    alt="Borb"
    role="presentation"
  />
)

export default Borb
