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
    <p>
      Gemma will be cosplaying Ruby Kurosawa later this year, and has reassured us that she’s going to be doing her rubesty. Then again, she always does—that’s what Michaela told us, at least! The two are inseparable; they must have some kind of spiritual power.
    </p>
    <p>
      It’s really important to know that Gemma has never, and will never, take a photo posing in front of a giant Minion. Neither would Robin, thinking about it. Some people say that they’ve seen such photos from a con earlier this year, but evidence has yet to surface&hellip;
    </p>
  </IdolDetails>
)

Gemma.Ring = () => (
  <img
    src={ring}
    alt="Gemma"
  />
)

export default Gemma
