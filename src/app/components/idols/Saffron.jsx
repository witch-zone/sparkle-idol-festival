import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/saffron.png'
import card from '../../../assets/images/cards/saffron.jpg'

const PairDetails = () => (
  <span>
    Saffron is learning about magical girls from <Link to="/idols/katie">Katie</Link>!
  </span>
)

const Saffron = () => (
  <IdolDetails
    name="Saffron Bradlaugh-Bonner"
    skill="Join The Shiba Society!"
    attribute="smile"
    card={card}
    fullCard="assets/cards/saffron.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/katie-saffron.png"
    pairPosition="left"
  >
  </IdolDetails>
)

Saffron.Ring = () => (
  <img
    src={ring}
    alt="Saffron"
  />
)

export default Saffron
