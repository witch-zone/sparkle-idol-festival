import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/saffron.png'
import card from '../../../assets/images/cards/saffron.jpg'

const PairDetails = () => (
  <span>
    Saffron is learning about magical girls from <Link to="/idols/katie">Katie</Link>!
  </span>
)

const Saffron = () => (
  <IdolDetails
    name="Saffron Bradlaugh-Bonner"
    skill="Join The Shiba Society!"
    attribute="smile"
    card={card}
    fullCard="/cards/saffron.jpg"
    pairDetails={<PairDetails />}
    pairLink="/cards/pairs/katie-saffron.jpg"
    pairPosition="left"
  >
    <p>
      An avid cosplayer, photographer, and collector of figures, Saffron's enthusiasm shapes the world around her. One time at a con, a plush she really wanted threw itself off a shelf, practically into her arms. We're not really sure how it happened—she was just <em>stand</em>ing there&hellip;
    </p>
    <p>
      Saffron will be cosplaying Riko later this year, and we're all hoping that she's going to compose a moving piano sonata about good shiba inus are. Of course, the Sparkle Idol Festival doesn't take sides—all dogs are good dogs.
    </p>
  </IdolDetails>
)

Saffron.Ring = () => (
  <img
    src={ring}
    alt="Saffron"
  />
)

export default Saffron
