import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Dani from './Dani'

const Idols = () => (
  <Switch>
    <Route path="/idols/dani" component={Dani} />
    <Redirect to="/" />
  </Switch>
)

export default Idols
