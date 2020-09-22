import Router from 'next/router'
import NProgress from 'nprogress'
import '../css/styles.css'
import StandardLayout from '../components/layouts/Standard'

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
  return (
    <StandardLayout>
      <Component {...pageProps} />
    </StandardLayout>
  )
}

export default MyApp
