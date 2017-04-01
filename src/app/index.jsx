import React from 'react'
import Transition from 'react-addons-css-transition-group'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Routes as IdolRoutes } from './components/idols'
import ScoutingResults from './components/ScoutingResults'

const SparkleIdolFestival = () => (
  <Route render={({ location }) => (
    <Transition
      component="main"
      className="o-wrapper"
      transitionName="t-page-move"
      transitionEnterTimeout={500}
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
)

export default SparkleIdolFestival
