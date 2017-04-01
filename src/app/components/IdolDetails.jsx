import React from 'react'
import { Link } from 'react-router-dom'

import Badge from './Badge'

import card from 'preload-image!../../assets/images/cards/back.jpg'

const IdolDetails = ({
  name,
  skill,
  attribute,
}) => (
  <div className="o-page">
    <header>
      <h1 className="c-title">
        Scout
      </h1>
    </header>

    <article className="c-idol-details">
      <div className="c-idol-details__card">
        <img src={card} />
      </div>

      <div className="c-idol-details__sidebar">
        <header>
          <Badge
            name={name}
            skill={skill}
            attribute={attribute}
          />
        </header>

        <section>
          <div>based on honoka</div>
          <div>ring icon</div>
        </section>

        <footer>
          <Link className="c-sif-button" to="/">
            back
          </Link>
        </footer>
      </div>
    </article>
  </div>
)

export default IdolDetails
