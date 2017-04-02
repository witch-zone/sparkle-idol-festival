import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/michaela.png'
import card from '../../../assets/images/cards/michaela.jpg'

const PairDetails = () => (
  <span>
    Michaela is being led astray by <Link to="/idols/harley">Harley</Link>!
  </span>
)

const Michaela = () => (
  <IdolDetails
    name="Michaela Ward"
    skill="Gachas Are Tough..."
    attribute="pure"
    card={card}
    fullCard="assets/cards/michaela.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/harley-michaela.png"
    pairPosition="right"
  >
  </IdolDetails>
)

Michaela.Ring = () => (
  <img
    src={ring}
    alt="Michaela"
  />
)

export default Michaela
