import Router from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false, minimum: 0.2 })

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
