import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Promyfill from 'promise-polyfill'

import SparkleIdolFestival from './app'

import otonokizaka from 'assets/images/otonokizaka.jpg'
import logo from 'assets/images/ribbon-logo.png'

require('./sass/preload.scss')
require('./sass/sif.scss')

if (!window.Promise) {
  window.Promise = Promyfill
}

const promiseMeAnImage = src => new Promise(
  (resolve, reject) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = reject
    img.src = src
  }
)

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
      }, 250
    )

    Promise.all([
      promiseMeAnImage(otonokizaka),
      promiseMeAnImage(logo),
    ]).then(showApp)
  }
)
