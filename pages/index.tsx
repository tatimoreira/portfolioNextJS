import React, { useState } from 'react'
import Head from 'next/head'
import { getInitialLocale } from '../translations/getInitialLocale'
import { wrapper } from '../styles/main.styles';


const Index: React.FC = () => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`)
  })
  return (
    <Head>
      <h1 css={wrapper}>Counter: {count}</h1>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default Index
