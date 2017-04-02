import React from 'react'

import IdolDetails from '../IdolDetails'

import ring from 'preload-image!../../../assets/images/rings/borb.png'
import card from '../../../assets/images/cards/borb.jpg'

const Borb = () => (
  <IdolDetails
    name="Bat Orb"
    skill="Everybody's Favourite!"
    attribute="all"
    card={card}
    fullCard="assets/cards/borb.png"
  >
    <p>
      Borb is the small, shapely friend who everyone fell in love with when Dani cosplayed <a href="http://schoolido.lu/cards/746/SR-Kousaka-Honoka-Vampire-event-Cool/" target="_blank">Vampire Honoka</a> in 2016!
    </p>
    <p>
      They weren't included as part of the scout until we realised that School Idol Festival scouts actually come in sets of 11, rather than 10, and so there was a space that needed to be filled. Borb is excellent at taking up space, so they were perfect for the role!
    </p>
    <p>
      You can find borb at <a href="http://twitter.com/theborbzone">@theborbzone</a>.
    </p>
  </IdolDetails>
)

Borb.Ring = () => (
  <img
    src={ring}
    alt="Borb"
    role="presentation"
  />
)

export default Borb
