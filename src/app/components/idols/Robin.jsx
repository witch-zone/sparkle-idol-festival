import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/robin.png'
import card from '../../../assets/images/cards/robin.jpg'

const PairDetails = () => (
  <span>
    Robin is combing the beach with <Link to="/idols/sami">Sami</Link>!
  </span>
)

const Robin = () => (
  <IdolDetails
    name="Robin Rosell"
    skill="Muscle Princess"
    attribute="cool"
    card={card}
    fullCard="assets/cards/robin.png"
    pairDetails={<PairDetails />}
    pairLink="assets/cards/pairs/robin-sami.png"
    pairPosition="right"
  >
    <p>
      Robin spent a lot of last year cosplaying idols, and so surprised everyone pretty hard in 2017 by getting heavily into pretend guns and real rowdy boys. 😘👌 We try not to let them have too many guns. Robin is also directly responsible for getting Dani into Love Live!, and therefore for making all of this possible!
    </p>
    <p>
      Robin will be cosplaying You Watanabe later this year, and doing a lot of in-character squats. We're all a little worried that they're going to try and throw Harley over their shoulder&hellip;
    </p>
  </IdolDetails>
)

Robin.Ring = () => (
  <img
    src={ring}
    alt="Robin"
  />
)

export default Robin
