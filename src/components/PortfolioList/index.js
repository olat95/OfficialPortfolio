import React from 'react'
import Portfolio from '../Portfolio'
import {
  Container,
  PortList,
  PortListDesc,
  PortListText,
  PortListTitle,
} from './PortfolioListEl'
import { portfolio } from '../../data'

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
        {portfolio.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link} />
        ))}
      </PortList>
    </Container>
  )
}

export default PortfolioList
