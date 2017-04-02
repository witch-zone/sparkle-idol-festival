import React from 'react'
import { Link } from 'react-router-dom'

import Button, { SecondaryButton } from './Button'
import Badge from './Badge'

import placeholderCard from 'preload-image!../../assets/images/cards/back.jpg'

const IdolDetails = ({
  name,
  skill,
  attribute,
  card,
  ring,
}) => (
  <div className="o-page">
    <header className="o-header">
      <h1 className="c-title">
        Valentine's Scout 2017
      </h1>
    </header>

    <article className="c-idol-details">
      <div className="c-idol-details__card">
        <img src={card || placeholderCard} />
      </div>

      <div className="c-idol-details__sidebar">
        <header className="c-idol-details__badge">
          <Badge
            name={name}
            skill={skill}
            attribute={attribute}
          />
        </header>

        <div className="c-idol-details__details-wrapper">
          <section className="c-idol-details__stats">
            <div>based on honoka</div>
            <div>ring icon</div>
          </section>
        </div>

        <footer className="c-idol-details__actions">
          <SecondaryButton>
            <a href={card} target="_blank">
              Zoom
            </a>
          </SecondaryButton>
          <Button>
            <Link to="/">
              OK!
            </Link>
          </Button>
        </footer>
      </div>
    </article>
  </div>
)

export default IdolDetails
