import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/katie.png'
import card from '../../../assets/images/cards/katie.jpg'

const PairDetails = () => (
  <span>
    Katie is looking at cute dogs with <Link to="/idols/saffron">Saffron</Link>!
  </span>
)

const Katie = () => (
  <IdolDetails
    name="Katie Collins"
    skill="Power Of The Moon"
    attribute="smile"
    card={card}
    fullCard="assets/cards/katie.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/katie-saffron.png"
    pairPosition="right"
  >
  </IdolDetails>
)

Katie.Ring = () => (
  <img
    src={ring}
    alt="Katie"
  />
)

export default Katie
