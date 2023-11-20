import { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import '@/styles/index.css'
import '@/styles/global.css'
import Head from 'next/head';
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={String(process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID)}
      domain={String(process.env.NEXT_PUBLIC_AUTH0_DOMAIN)}
    >
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextUIProvider>
        <NextThemesProvider
          attribute='class'
          defaultTheme='dark'
        >
          <Component {...pageProps} />  
          <Analytics />
        </NextThemesProvider>
      </NextUIProvider>
    </Auth0Provider>
  )
}
