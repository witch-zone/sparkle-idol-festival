import React from 'react'
import { Link } from 'react-router-dom'

import Idols from './idols'

const ScoutingResults = () => (
  <section className="c-scouting-results">
    <Link to="/idols/saffron">
      <Idols.Saffron.Ring />
    </Link>

    <Link to="/idols/katie">
      <Idols.Katie.Ring />
    </Link>

    <Link to="/idols/harley">
      <Idols.Harley.Ring />
    </Link>

    <Link to="/idols/sami">
      <Idols.Sami.Ring />
    </Link>

    <Link to="/idols/danni">
      <Idols.Danni.Ring />
    </Link>

    <Link to="/idols/dani">
      <Idols.Dani.Ring />
    </Link>

    <Link to="/idols/gemma">
      <Idols.Gemma.Ring />
    </Link>

    <Link to="/idols/borb">
      <Idols.Borb.Ring />
    </Link>

    <Link to="/idols/yen">
      <Idols.Yen.Ring />
    </Link>

    <Link to="/idols/michaela">
      <Idols.Michaela.Ring />
    </Link>

    <Link to="/idols/robin">
      <Idols.Robin.Ring />
    </Link>
  </section>
)

export default ScoutingResults
