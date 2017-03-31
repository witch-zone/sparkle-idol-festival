import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Dani from './Dani'
import Yen from './Yen'
import Robin from './Robin'
import Sami from './Sami'
import Harley from './Harley'
import Michaela from './Michaela'
import Katie from './Katie'
import Saffron from './Saffron'
import Danni from './Danni'
import Gemma from './Gemma'

const Idols = () => (
  <Switch>
    <Route path="/idols/dani" component={Dani} />
    <Route path="/idols/yen" component={Yen} />
    <Route path="/idols/robin" component={Robin} />
    <Route path="/idols/sami" component={Sami} />
    <Route path="/idols/harley" component={Harley} />
    <Route path="/idols/michaela" component={Michaela} />
    <Route path="/idols/katie" component={Katie} />
    <Route path="/idols/saffron" component={Saffron} />
    <Route path="/idols/danni" component={Danni} />
    <Route path="/idols/gemma" component={Gemma} />
    <Redirect to="/" />
  </Switch>
)

export default Idols
