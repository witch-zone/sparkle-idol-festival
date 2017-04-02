import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/katie.png'
import card from '../../../assets/images/cards/katie.jpg'

const PairDetails = () => (
  <span>
    Katie is looking at cute dogs with <Link to="/idols/saffron">Saffron</Link>!
  </span>
)

const Katie = () => (
  <IdolDetails
    name="Katie Collins"
    skill="Power Of The Moon"
    attribute="smile"
    card={card}
    fullCard="/cards/katie.jpg"
    pairDetails={<PairDetails />}
    pairLink="/cards/pairs/katie-saffron.jpg"
    pairPosition="right"
  >
    <p>
      Sweeter than cinnamon roll, and knowing pretty much everything there is to know about magical girls, Katie is the group’s sparkly support! The witch♥zone is forever indebted to her after she spent an entire day at a con helping fix and adjust Dani’s Vampire Honoka cosplay, which...kind of started to fall apart. The borb is fine, though, don’t worry!
    </p>
    <p>
      Katie will be cosplaying Riko later this year, along with Saffron. She’ll also be cosplaying Tomoyo from Cardcaptor Sakura, but between us I think that might just be her real self.
    </p>
  </IdolDetails>
)

Katie.Ring = () => (
  <img
    src={ring}
    alt="Katie"
  />
)

export default Katie
