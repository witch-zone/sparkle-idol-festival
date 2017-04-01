import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/danni.png'
import card from '../../../assets/images/cards/danni.jpg'

const Danni = () => (
  <IdolDetails
    name="Danielle Rianna Carter"
    skill="Actually A Princess"
    attribute="pure"
    card={card}
    ring={ring}
  />
)

Danni.Ring = () => (
  <img
    src={ring}
    alt="Danni"
    role="presentation"
  />
)

export default Danni
