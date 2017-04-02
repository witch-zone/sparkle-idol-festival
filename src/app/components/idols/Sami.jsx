import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/sami.png'
import card from '../../../assets/images/cards/sami.jpg'

const PairDetails = () => (
  <span>
    Sami is taking in the sun with <Link to="/idols/robin">Robin</Link>!
  </span>
)

const Sami = () => (
  <IdolDetails
    name="Samantha Fulton"
    skill="I Love Dogys So Much"
    attribute="pure"
    card={card}
    fullCard="assets/cards/sami.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/robin-sami.png"
    pairPosition="left"
  >
  </IdolDetails>
)

Sami.Ring = () => (
  <img
    src={ring}
    alt="Sami"
  />
)

export default Sami
