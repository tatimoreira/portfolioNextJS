import React from 'react'
import CoverLetter from '../../components/CoverLetter'
import withLocale from '../../hocs/withLocale'
import Container from '../../components/Layout/Container'
//import Header from '../../components/Layout/Header';

const IndexPage: React.FC = () => {
  return (
    <Container titleKey="greeting">
      <CoverLetter />
    </Container>
  )
}

export default withLocale(IndexPage)
