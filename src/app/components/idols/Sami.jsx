import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/sami.png'
import card from '../../../assets/images/cards/sami.jpg'

const Sami = () => (
  <IdolDetails
    name="Samantha Fulton"
    skill="I Love Dogys So Much"
    attribute="pure"
    card={card}
    fullCard="assets/cards/sami.png"
  />
)

Sami.Ring = () => (
  <img
    src={ring}
    alt="Sami"
  />
)

export default Sami
