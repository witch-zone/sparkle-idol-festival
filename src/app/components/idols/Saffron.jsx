import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/saffron.png'
import card from '../../../assets/images/cards/saffron.jpg'

const Saffron = () => (
  <IdolDetails
    name="Saffron Bradlaugh-Bonner"
    skill=""
    attribute="smile"
    card={card}
    fullCard="assets/cards/saffron.png"
  />
)

Saffron.Ring = () => (
  <img
    src={ring}
    alt="Saffron"
  />
)

export default Saffron
