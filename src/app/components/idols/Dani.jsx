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
    fullCard="/cards/dani.jpg"
    pairDetails={<PairDetails />}
    pairLink="/cards/pairs/dani-yen.jpg"
    pairPosition="left"
  >
    <p>
      Co-head witch of the witch♥zone, and designer of the Sparkle Idol Festival, Dani will be cosplaying Chika Takami later this year. Like Chika, she's kinda low-level cosplaying Honoka at all times. Yen sent her bread in the post once, just to prove the point.
    </p>
    <p>
      Originally, the scout was going to happen when all the members were together cosplaying Aquors. We got too excited and couldn't wait that long, though, so it moved to Valentine's day! Surprise! 💖
    </p>
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
