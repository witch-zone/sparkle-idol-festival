import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/harley.png'
import card from '../../../assets/images/cards/harley.jpg'

const PairDetails = () => (
  <span>
    Harley is enjoying the festival with <Link to="/idols/michaela">Michaela</Link>!
  </span>
)

const Harley = () => (
  <IdolDetails
    name="Harley Williams"
    skill="Busy As A Bee!"
    attribute="cool"
    card={card}
    fullCard="assets/cards/harley.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/harley-michaela.png"
    pairPosition="left"
  >
  </IdolDetails>
)

Harley.Ring = () => (
  <img
    src={ring}
    alt="Harley"
  />
)

export default Harley
