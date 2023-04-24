import type { AppProps } from 'next/app'
import 'video.js/dist/video-js.css'
import 'pages/globals.css'



export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
