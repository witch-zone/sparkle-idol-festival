import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/michaela.png'
import card from '../../../assets/images/cards/michaela.jpg'

const Michaela = () => (
  <IdolDetails
    name="Michaela Ward"
    skil="Gachas Are Tough..."
    attribute="pure"
    card={card}
    fullCard="assets/cards/michaela.png"
  />
)

Michaela.Ring = () => (
  <img
    src={ring}
    alt="Michaela"
  />
)

export default Michaela
