import React from 'react'
import { Link } from 'react-router-dom'

import Idols from './idols'

const ScoutingResults = () => (
  <div className="o-page t-page-move--natsuiro-egao-de-1-2-jump">
    <header className="o-header">
      <h1 className="c-title">
        Valentine's Scout 2017
      </h1>

      <h2 className="c-new-member-count">
        Scouted <strong>11</strong> new members!
      </h2>
    </header>

    <section className="c-scouting-results">
      <Link to="/idols/saffron" className="c-scouting-results__idol">
        <Idols.Saffron.Ring />
      </Link>

      <Link to="/idols/katie" className="c-scouting-results__idol">
        <Idols.Katie.Ring />
      </Link>

      <Link to="/idols/harley" className="c-scouting-results__idol">
        <Idols.Harley.Ring />
      </Link>

      <Link to="/idols/sami" className="c-scouting-results__idol">
        <Idols.Sami.Ring />
      </Link>

      <Link to="/idols/danni" className="c-scouting-results__idol">
        <Idols.Danni.Ring />
      </Link>

      <Link to="/idols/dani" className="c-scouting-results__idol">
        <Idols.Dani.Ring />
      </Link>

      <Link to="/idols/gemma" className="c-scouting-results__idol">
        <Idols.Gemma.Ring />
      </Link>

      <Link to="/idols/borb" className="c-scouting-results__idol">
        <Idols.Borb.Ring />
      </Link>

      <Link to="/idols/yen" className="c-scouting-results__idol">
        <Idols.Yen.Ring />
      </Link>

      <Link to="/idols/michaela" className="c-scouting-results__idol">
        <Idols.Michaela.Ring />
      </Link>

      <Link to="/idols/robin" className="c-scouting-results__idol">
        <Idols.Robin.Ring />
      </Link>
    </section>

    <section className="c-scouting-intro">
      For Valentine's day 2017, we thought we'd surprise our dear Love Live!-loving friends by making them into real idols! Click on a member to learn more about them.
    </section>
  </div>
)

export default ScoutingResults
