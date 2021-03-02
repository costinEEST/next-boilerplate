import { AppProps } from 'next/app'
import '../styles/app.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
