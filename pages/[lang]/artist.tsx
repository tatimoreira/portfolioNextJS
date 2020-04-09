import React from 'react'
import Container from '../../components/Layout/Container'
import Artist from '../../components/Artist'
import withLocale from '../../hocs/withLocale'

const ArtistPage: React.FC = () => {
  return (
    <Container titleKey="about">
      <Artist />
    </Container>
  )
}

export default withLocale(ArtistPage)
