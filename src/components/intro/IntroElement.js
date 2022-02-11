import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`
export const IntroLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const IntroLeftWrapper = styled.div`
  padding: 50px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Introduction = styled.h2`
  font-size: 30px;
  font-weight: 300;
`
export const IntroductName = styled.h1`
  font-size: 60px;
`
export const IntroductTitle = styled.div`
  height: 50px;
  overflow: hidden;
`
export const IntroductTitleWrap = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;

  @keyframes move {
    25% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(-100px);
    }
    75% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(-200px);
    }
  } ;
`
export const IntroductTitleContent = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #2e86de;
  display: flex;
  align-items: center;
`
export const IntroductDesc = styled.p`
  text-align: justify;
`
export const IntroRight = styled.div`
  flex: 1;
  position: relative;
`
export const IntroSVG = styled.svg`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
`
export const IntroRightBg = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(13% 0, 100% 0, 100% 100%, 6% 100%, 0% 38%);
  background-color: #2e86de;
  position: absolute;
  top: 0;
  right: 0;
`
export const IntroImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`
