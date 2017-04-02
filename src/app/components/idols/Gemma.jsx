import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/gemma.png'
import card from '../../../assets/images/cards/gemma.jpg'

const PairDetails = () => (
  <span>
    Gemma is having a sleepy afternoon with <Link to="/idols/danni">Danni</Link>!
  </span>
)

const Gemma = () => (
  <IdolDetails
    name="Gemma Izzy Lowe"
    skill="Doing My Rubesty"
    attribute="cool"
    card={card}
    fullCard="assets/cards/gemma.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/danni-gemma.png"
    pairPosition="right"
  >
  </IdolDetails>
)

Gemma.Ring = () => (
  <img
    src={ring}
    alt="Gemma"
  />
)

export default Gemma
