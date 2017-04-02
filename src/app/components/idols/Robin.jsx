import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/robin.png'
import card from '../../../assets/images/cards/robin.jpg'

const PairDetails = () => (
  <span>
    Robin is combing the beach with <Link to="/idols/sami">Sami</Link>!
  </span>
)

const Robin = () => (
  <IdolDetails
    name="Robin Rosell"
    skill="Muscle Princess"
    attribute="cool"
    card={card}
    fullCard="assets/cards/robin.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/robin-sami.png"
    pairPosition="right"
  >
  </IdolDetails>
)

Robin.Ring = () => (
  <img
    src={ring}
    alt="Robin"
  />
)

export default Robin
