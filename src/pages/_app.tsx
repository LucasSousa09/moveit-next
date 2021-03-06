import { Provider } from 'next-auth/client'
import '../styles/global.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
