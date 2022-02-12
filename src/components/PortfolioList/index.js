import React from 'react'
import Portfolio from '../Portfolio'
import {
  Container,
  PortList,
  PortListDesc,
  PortListText,
  PortListTitle,
} from './PortfolioListEl'

const PortfolioList = () => {
  return (
    <Container>
      <PortListText>
        <PortListTitle>Some of my past work</PortListTitle>
        <PortListDesc>
          All was done with the my knowledge of HTML5/CSS3/SCSS BOOTSTRAP4
          JAVASCRIPT POSTGRESQL MONGODB GIT/GITHUB EXPRESSJs NODEJs REACTJs
        </PortListDesc>
      </PortListText>
      <PortList>
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Portfolio />
      </PortList>
    </Container>
  )
}

export default PortfolioList
