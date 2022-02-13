import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`
export const AboutLeft = styled.div`
  flex: 1;
  clip-path: polygon(
    0 10%,
    10% 10%,
    10% 0,
    90% 0,
    90% 11%,
    100% 11%,
    100% 91%,
    90% 91%,
    90% 100%,
    10% 100%,
    10% 91%,
    0 91%
  );
  background-color: #2e86de;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`
export const AboutCardBg = styled.div`
  position: absolute;
  top: 90px;
  left: 105px;
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  background-color: #222f3e;
`
export const AboutCard = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`
export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`
export const AboutRight = styled.div`
  flex: 1;
  padding: 0 20px;
`
export const AboutRTitle = styled.h2`
  font-weight: 400;
`
export const AboutRSubtitle = styled.p`
  color: #576574;
  margin: 20px 0;
`
export const AboutAward = styled.div``
export const AboutAwardImg = styled.img`
  width: 300px;
  height: 200px;
  padding-right: 30px;
  border-radius: 20px;
`
export const AboutAwardText = styled.div`
  margin-top: 20px;
`
export const AboutAwardTitle = styled.h4`
  font-weight: bold;
  color: #222f3e;
  margin-bottom: 10px;
`
export const AboutAwardDesc = styled.p`
  color: #576574;
`
