import React from 'react'

import smile from 'preload-image!../../assets/images/attributes/smile.png'
import pure from 'preload-image!../../assets/images/attributes/pure.png'
import cool from 'preload-image!../../assets/images/attributes/cool.png'

const Badge = ({
  name,
  skill,
  attribute,
}) => (
  <div className={`c-badge c-badge--${attribute}`}>
    <div className="c-badge__attribute">
      { attribute === "smile" &&
        <img src={smile} role="presentation" alt="" />
      }

      { attribute === "pure" &&
        <img src={pure} role="presentation" alt="" />
      }

      { attribute === "cool" &&
        <img src={cool} role="presentation" alt="" />
      }
    </div>

    <div className="c-badge__wrapper">
      <div className="c-badge__skill">
        {skill}
      </div>

      <div className="c-badge__name">
        <h1>{name}</h1>
      </div>
    </div>
  </div>
)

export default Badge
