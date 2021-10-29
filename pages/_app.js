//anything that have to be available for all component, put it here
import 'tailwindcss/tailwind.css'
// import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }