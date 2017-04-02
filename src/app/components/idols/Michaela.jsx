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
    <p>
      The group’s idol and mobage expert, Michaela has pulled everyone worth pulling. She’s also a huge Honoka fan, to the point where even Dani accepts that she’s probably got to be #1 Honoka Liker—although I hear Shinobu recently came home? I wonder if they like Honoka too?
    </p>
    <p>
      Michaela kan-an do anything she puts her mind to! That is to say, she’ll be putting her mind to cosplaying Kanan later this year, and making sure we’re all keeping safe and not getting into trouble. I’m sure Yen will have something to say about that, though.
    </p>
  </IdolDetails>
)

Michaela.Ring = () => (
  <img
    src={ring}
    alt="Michaela"
  />
)

export default Michaela
