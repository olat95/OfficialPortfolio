import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  display: flex;
  height: 100vh;

  ${mobile({ flexDirection: 'column' })}
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

  ${mobile({
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%',
    border: '1px solid black',
  })}
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

  ${mobile({ display: 'none' })}
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
  position: absolute;
  top: 0;
  right: 0;

  ${'' /* ${mobile({ display: 'none' })} */}
`
export const IntroImage = styled.img`
  width: 70%;
  height: 70%;
  position: absolute;
  right: 105px;
  top: 120px;
  object-fit: contain;
`
