import React from 'react'
import pc from '../../images/pc.jpg'
import soft from '../../images/cert.PNG'
import python from '../../images/python(HiiT).PNG'
import {
  AboutAward,
  AboutAwardDesc,
  AboutAwardImg,
  AboutAwardText,
  AboutAwardTitle,
  AboutCard,
  AboutCardBg,
  AboutImage,
  AboutLeft,
  AboutRight,
  AboutRSubtitle,
  AboutRTitle,
  Container,
} from './AboutElement'

const About = () => {
  return (
    <Container>
      <AboutLeft>
        <AboutCardBg></AboutCardBg>
        <AboutCard>
          <AboutImage src={pc} alt='work station' />
        </AboutCard>
      </AboutLeft>
      <AboutRight>
        <AboutRTitle>About Me</AboutRTitle>
        <AboutRSubtitle>
          I effectively develop any organization I work with by utilizing my
          acquired skills, experience, knowledge in software development,
          ability to pick up new technology and learn fast, working diligently
          to ultimately contribute my quota so as to fulfil organizational
          objectives and achieve managerial goals and targets.
        </AboutRSubtitle>
        <AboutAward>
          <AboutAwardImg src={soft} alt='python certificate' />
          <AboutAwardImg src={python} alt='python certificate' />
          <AboutAwardText>
            <AboutAwardTitle>My Certificates</AboutAwardTitle>
            <AboutAwardDesc>
              The above certificate is my soft skills and python programming
              certificate
            </AboutAwardDesc>
          </AboutAwardText>
        </AboutAward>
      </AboutRight>
    </Container>
  )
}

export default About
