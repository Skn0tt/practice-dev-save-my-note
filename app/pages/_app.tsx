import { AppProps } from "blitz"
import "./styles.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
