import React from 'react'
import CoverLetter from '../../components/CoverLetter'
import withLocale from '../../hocs/withLocale'
import Container from '../../components/Layout/Container'
//import Header from '../../components/Layout/Header';
//import { ThemeProvider } from 'emotion-theming';
import styled from '../../styles/styled'


const IndexPage: React.FC = () => {
  const tema = styled;
  console.log(tema)
  debugger
  return (
    <Container titleKey="greeting">
      <CoverLetter />
    </Container>
  )
}

export default withLocale(IndexPage)
