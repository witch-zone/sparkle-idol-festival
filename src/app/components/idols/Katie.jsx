import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/katie.png'
import card from '../../../assets/images/cards/katie.jpg'

const Katie = () => (
  <IdolDetails
    name="Katie Collins"
    skill="Power Of The Moon"
    attribute="smile"
    card={card}
    ring={ring}
  />
)

Katie.Ring = () => (
  <img
    src={ring}
    alt="Katie"
  />
)

export default Katie
