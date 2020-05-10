import React from 'react'
import CoverLetter from '../../components/CoverLetter'
import withLocale from '../../hocs/withLocale'
import Container from '../../components/Layout/Container'
//import Header from '../../components/Layout/Header';
//import { ThemeProvider } from 'emotion-theming';
import styled from '../../styles/styled'
import theme from '../../styles/theme'

import { ThemeProvider } from "emotion-theming"


const IndexPage: React.FC = () => {
  const tema = styled;
  console.log(tema)
  debugger
  return (
    <ThemeProvider theme={theme}>
      <Container titleKey="greeting">
        <CoverLetter />
      </Container>
    </ThemeProvider>
  )
}

export default withLocale(IndexPage)
