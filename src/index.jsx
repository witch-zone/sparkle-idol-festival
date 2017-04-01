import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import SparkleIdolFestival from './app'

require('./sass/preload.scss')
require('./sass/sif.scss')

render(
  <BrowserRouter>
    <SparkleIdolFestival />
  </BrowserRouter>,
  document.getElementById('✨'),
  () => {
    const showApp = () => setTimeout(
      () => {
      document.getElementById("💭").classList.add("‼️")
      document.getElementById('✨').classList.add("‼️")
      }, 666
    )

    const logo = document.getElementById("🌠")
    logo.onload = showApp
    logo.src = logo.src
  }
)
