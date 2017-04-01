import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/sami.png'
import card from '../../../assets/images/cards/sami.jpg'

const Sami = () => (
  <IdolDetails
    name="Samantha Fulton"
    skill=""
    attribute="pure"
    card={card}
    ring={ring}
  />
)

Sami.Ring = () => (
  <img
    src={ring}
    alt="Sami"
  />
)

export default Sami
