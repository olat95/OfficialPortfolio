import React from 'react'
import {
  BrowserCircle,
  BrowserCircle2,
  BrowserCircle3,
  Container,
  PortBrowser,
  PortfolioImg,
  PortfolioLink,
} from './PortfolioEl'

const Portfolio = ({ img, link }) => {
  return (
    <Container>
      <PortBrowser>
        <BrowserCircle></BrowserCircle>
        <BrowserCircle2></BrowserCircle2>
        <BrowserCircle3></BrowserCircle3>
      </PortBrowser>
      <PortfolioLink to={link} replace>
        <PortfolioImg src={img} alt='' />
      </PortfolioLink>
    </Container>
  )
}

export default Portfolio
