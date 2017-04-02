import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/danni.png'
import card from '../../../assets/images/cards/danni.jpg'

const PairDetails = () => (
  <span>
    Danni is trying her best not to disturb <Link to="/idols/gemma">Gemma</Link>!
  </span>
)

const Danni = () => (
  <IdolDetails
    name="Danielle Rianna Carter"
    skill="Actually A Princess"
    attribute="pure"
    card={card}
    fullCard="/cards/danni.jpg"
    pairDetails={<PairDetails />}
    pairLink="/cards/pairs/danni-gemma.jpg"
    pairPosition="left"
  >
    <p>
      Even though she speaks proper refined like a princess and all that, Danni will be cosplaying Hanamaru later this year. MIRAI-ZURA~ Don't be fooled by this gyaru though, she's actually more like a ferocious, fiery lion if you try and take her chicken nuggets!
    </p>
    <p>
      As well as sending out printed versions of all the cards, we ended up doing a real scout when some of the members got together in Birmingham! We had a pile of sweets and a scouting box full of envelopes, and everybody got to pick one at random, just like in the real School Idol Festival! Danni kinda ended up sneaking away with all the cards at the end of the night, though&hellip;😇
    </p>
  </IdolDetails>
)

Danni.Ring = () => (
  <img
    src={ring}
    alt="Danni"
    role="presentation"
  />
)

export default Danni
