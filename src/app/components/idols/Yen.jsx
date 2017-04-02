import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/yen.png'
import card from '../../../assets/images/cards/yen.jpg'

const PairDetails = () => (
  <span>
    Yen got lost in a whole forest of treats with <Link to="/idols/dani">Dani</Link>!
  </span>
)

const Yen = () => (
  <IdolDetails
    name="Yen Quach"
    skill="A Real Troublemaker♡"
    attribute="smile"
    card={card}
    fullCard="assets/cards/yen.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/dani-yen.jpg"
    pairPosition="right"
  >
  </IdolDetails>
)

Yen.Ring = () => (
  <img
    src={ring}
    alt="Yen"
  />
)

export default Yen
