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
    fullCard="/cards/yen.jpg"
    pairDetails={<PairDetails />}
    pairLink="/cards/pairs/dani-yen.jpg"
    pairPosition="right"
  >
    <p>
      Co-head witch of the witch♥zone and quite possibly actually Nico in real life, Yen is responsible for all of the illustrations in the Sparkle Idol Festival! She also takes part in both the #draweveryday and #mischiefeveryday challenges. Expert in glitter-tier posting, and wholehearted believer in the power of MUD.
    </p>
    <p>
      Yen will be cosplaying Yohane later this year, and all the other members will become her little devils. They just don’t know that yet. 😈💜
    </p>
  </IdolDetails>
)

Yen.Ring = () => (
  <img
    src={ring}
    alt="Yen"
  />
)

export default Yen
