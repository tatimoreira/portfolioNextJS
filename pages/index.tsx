import React from 'react'
import Head from 'next/head'
import { getInitialLocale } from '../translations/getInitialLocale'
//import { wrapper } from '../styles/main.styles';
//import { ThemeProvider } from 'emotion-theming';
import styled from '../styles/styled';


const Index: React.FC = () => {
  //const [count, setCount] = useState(0);
  const tema = styled;
  console.log(tema)
  debugger

  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`)
  })
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default Index
