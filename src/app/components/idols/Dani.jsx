import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/dani.png'
import card from '../../../assets/images/cards/dani.jpg'

const PairDetails = () => (
  <span>
    Dani is busy getting up to mischief with <Link to="/idols/yen">Yen</Link>!
  </span>
)

const Dani = () => (
  <IdolDetails
    name="Dani Quinn Sexton"
    skill="Spooky Sweet Royalty"
    attribute="pure"
    card={card}
    fullCard="assets/cards/dani.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/dani-yen.png"
    pairPosition="left"
  >

  </IdolDetails>
)

Dani.Ring = () => (
  <img
    src={ring}
    alt="Dani"
    role="presentation"
  />
)

export default Dani
