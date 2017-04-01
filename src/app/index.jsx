import React from 'react'
import Transition from 'react-addons-css-transition-group'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Routes as IdolRoutes } from './components/idols'
import ScoutingResults from './components/ScoutingResults'

const SparkleIdolFestival = () => (
  <main className="o-wrapper">
    <Route render={({ location }) => (
      <Transition
        transitionName="t-page-move"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={500}
      >
        <Switch
          location={location}
          key={location.key}
        >
          <Route path="/idols" component={IdolRoutes} />
          <Route exact path="/" component={ScoutingResults} />
          <Redirect to="/" />
        </Switch>
      </Transition>
    )} />
  </main>
)

export default SparkleIdolFestival
