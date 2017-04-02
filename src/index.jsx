import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import SparkleIdolFestival from './app'

import preloader from './preloader'

require('./sass/preload.scss')
require('./sass/sif.scss')

render(
  <BrowserRouter onUpdate={() => console.log("hello")}>
    <SparkleIdolFestival />
  </BrowserRouter>,
  document.getElementById('✨'),
  preloader,
)
