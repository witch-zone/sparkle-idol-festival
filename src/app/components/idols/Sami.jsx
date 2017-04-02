import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/sami.png'
import card from '../../../assets/images/cards/sami.jpg'

const PairDetails = () => (
  <span>
    Sami is taking in the sun with <Link to="/idols/robin">Robin</Link>!
  </span>
)

const Sami = () => (
  <IdolDetails
    name="Samantha Fulton"
    skill="I Love Dogys So Much"
    attribute="pure"
    card={card}
    fullCard="/cards/sami.jpg"
    pairDetails={<PairDetails />}
    pairLink="/cards/pairs/robin-sami.jpg"
    pairPosition="left"
  >
    <p>
      The members originally came together when Sami invited some of them to Danni’s birthday party last year—previously, they’d never even met, but by the end of the night the witch♥zone was formed! On top of that, they created a pretty convincing Shrek coffee shop AU, but sadly there’s been no progress on that since.
    </p>
    <p>
      By far the <a href="https://www.youtube.com/watch?v=Q-AHUFHHNXw" target="_blank">most refined and formal</a> member of the group, Sami will be cosplaying Dia Kurosawa later this year. We’re all smartening up and practicing our manners in preparation—and please, don’t swear in front of her when she’s cosplaying Hanayo! 🍚
    </p>
  </IdolDetails>
)

Sami.Ring = () => (
  <img
    src={ring}
    alt="Sami"
  />
)

export default Sami
