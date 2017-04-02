import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/danni.png'
import card from '../../../assets/images/cards/danni.jpg'

const PairDetails = () => (
  <span>
    Danni is trying her best not to disturb <Link to="/idols/gemma">Gemma</Link>!
  </span>
)

const Danni = () => (
  <IdolDetails
    name="Danielle Rianna Carter"
    skill="Actually A Princess"
    attribute="pure"
    card={card}
    fullCard="assets/cards/danni.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/danni-gemma.png"
    pairPosition="left"
  >
  </IdolDetails>
)

Danni.Ring = () => (
  <img
    src={ring}
    alt="Danni"
    role="presentation"
  />
)

export default Danni
