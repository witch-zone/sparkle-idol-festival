import React from 'react'

import topLeft from '../../assets/images/border/top-left.png'
import topRight from '../../assets/images/border/top-right.png'
import bottomLeft from '../../assets/images/border/bottom-left.png'
import bottomRight from '../../assets/images/border/bottom-right.png'

const BorderOverlay = () => (
  <div className="o-border">
    <img src={topLeft} className="o-border__top-left" />
    <img src={topRight} className="o-border__top-right" />
    <img src={bottomLeft} className="o-border__bottom-left" />
    <img src={bottomRight} className="o-border__bottom-right" />
  </div>
)

export default BorderOverlay
