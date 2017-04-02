import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

import Button, { SecondaryButton } from './Button'
import Badge from './Badge'

import placeholderCard from 'preload-image!../../assets/images/cards/back.jpg'

const IdolDetails = ({
  name,
  skill,
  attribute,
  card,
  fullCard,
  ring,
  children,
  pairDetails,
  pairLink,
}) => (
  <div className="o-page">
    <header className="o-header">
      <h1 className="c-title">
        Valentine's Scout 2017
      </h1>
    </header>

    <article className="c-idol-details">
      <div className="c-idol-details__card t-page-move-left">
        <a className="c-idol-details__card-wrapper" href={fullCard} target="_blank">
          <img src={placeholderCard} />

          { card &&
            <img className="card" src={card} />
          }
        </a>
      </div>

      <div className="c-idol-details__sidebar t-page-move-right">
        <header className="c-idol-details__badge">
          <Badge
            name={name}
            skill={skill}
            attribute={attribute}
          />
        </header>

        <div className="c-idol-details__details-wrapper">
          <section className="c-idol-details__stats">
            {children}
          </section>

          { pairLink &&
            <section className="c-idol-details__stats c-idol-details__pair">
              {pairDetails}
            </section>
          }
        </div>

        <footer className="c-idol-details__actions">
          <SecondaryButton>
            <a href={fullCard} target="_blank">
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
