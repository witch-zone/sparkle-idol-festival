import React from 'react'
import { Link } from 'react-router-dom'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/harley.png'
import card from '../../../assets/images/cards/harley.jpg'

const PairDetails = () => (
  <span>
    Harley is enjoying the festival with <Link to="/idols/michaela">Michaela</Link>!
  </span>
)

const Harley = () => (
  <IdolDetails
    name="Harley Williams"
    skill="Busy As A Bee!"
    attribute="cool"
    card={card}
    fullCard="/cards/harley.jpg"
    pairDetails={<PairDetails />}
    pairLink="/cards/pairs/harley-michaela.jpg"
    pairPosition="left"
  >
    <p>
      Heir to a <span style={{'text-decoration': 'line-through'}}>questionable</span> great art fortune and lover of bumblebees, Harley will be cosplaying Mari later this year. Possibly the shiniest and definitely the most fashionable member of the group, her photography skills are...heavily refined and practiced. Maybe that’s why you’ll never see her makeup out of place?
    </p>
    <p>
      As a White Day gift after the Sparkle Idol Festival, Harley joined us all up in a tough-looking delinquent gang. It’s an unorthodox gift, but thoughtful and generous all the same! We just hope nothing too spicy happens.
    </p>
  </IdolDetails>
)

Harley.Ring = () => (
  <img
    src={ring}
    alt="Harley"
  />
)

export default Harley
