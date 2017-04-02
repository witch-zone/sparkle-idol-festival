import React from 'react'

import pairLeft from '../../assets/images/pair-left.png'
import pairRight from '../../assets/images/pair-right.png'

const PairBadge = ({
  details,
  link,
  position,
  className,
}) => (
  <div className={`c-pair-badge ${className}`}>
    <a
      href={link}
      target="_blank"
      className="c-pair-badge__icon"
    >
      <img
        src={position === "left" ? pairLeft : pairRight}
        alt={`This card is on the ${position} in the pair!`}
        role="presentation"
      />
    </a>

    <div className="c-pair-badge__details">
      <h4 className="c-pair-badge__title attribute">Pair Info</h4>
      {details}
    </div>
  </div>
)

PairBadge.defaultProps = {
  className: '',
}

export default PairBadge
