import Promyfill from 'promise-polyfill'

import otonokizaka from 'assets/images/otonokizaka.jpg'
import logo from 'assets/images/logo.png'

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

const preloader = () => {
  const showApp = () => setTimeout(
    () => {
      document.getElementById("💭").classList.add("‼️")
      document.getElementById('✨').classList.add("‼️")
    }, 666
  )

  Promise.all([
    promiseMeAnImage(otonokizaka),
    promiseMeAnImage(logo),
  ]).then(showApp)
}

export default preloader
