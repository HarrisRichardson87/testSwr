import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr';
const fetcher = (query: string) => fetch('http://localhost:3000/api/hello', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query })
}).then(res => res.json());

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SWRConfig
      value={{
        fetcher
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  ) 
}
