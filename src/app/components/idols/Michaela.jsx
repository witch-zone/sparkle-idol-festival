import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/michaela.png'
import card from '../../../assets/images/cards/michaela.jpg'

const Michaela = () => (
  <IdolDetails
    name="Michaela Ward"
    attribute="pure"
    card={card}
    ring={ring}
  />
)

Michaela.Ring = () => (
  <img
    src={ring}
    alt="Michaela"
  />
)

export default Michaela
