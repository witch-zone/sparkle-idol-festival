import React from 'react'
import Transition from 'react-addons-css-transition-group'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Routes as IdolRoutes } from './components/idols'
import ScoutingResults from './components/ScoutingResults'

const SparkleIdolFestival = () => (
  <Route render={({ location }) => {
    const isIdolRoute = !!location.pathname.match(/\/idols/)
    const transitionName = isIdolRoute ? "t-idol-move" : "t-page-move"

    return (
      <Transition
        component="main"
        className="o-wrapper"
        transitionName={transitionName}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
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
    )
  }} />
)

export default SparkleIdolFestival
