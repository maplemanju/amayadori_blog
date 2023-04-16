import '../styles/global.scss'
import '../styles/prism.css'

import { useEffect } from 'react'
import moment from 'moment'

export default function App({ Component, pageProps }) {
  const detectTimeTheme = () => {
    const currenTime = moment().hour()
    let switchThisTheme = 'light'
    if (currenTime >= 18) {
      switchThisTheme = 'dark'
    } else {
      switchThisTheme = 'light'
    }
    console.log('auto theme', switchThisTheme)
    document.documentElement.setAttribute('site-theme', switchThisTheme)
  }

  useEffect(() => {
    detectTimeTheme()
  }, [])

  return <Component {...pageProps} />
}
