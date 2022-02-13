import styled from 'styled-components'
import { Link as LinkRoute } from 'react-router-dom'

export const Container = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid #dfe4ea;
  border-radius: 50px 50px 0 0;
  overflow: hidden;
  box-shadow: -2px 5px 14px -7px rgba(0, 0, 0, 1);
  -webkit-box-shadow: -2px 5px 14px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -2px 5px 14px -7px rgba(0, 0, 0, 1);
`
export const PortBrowser = styled.div`
  height: 40px;
  background-color: #ced6e0;
  display: flex;
  padding-left: 25px;
  align-items: center;
  position: sticky;
  z-index: 2;
`
export const BrowserCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 3px;
  background-color: #ea2027;
`
export const BrowserCircle2 = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 3px;
  background-color: #ffc312;
`
export const BrowserCircle3 = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 3px;
  background-color: #009432;
`
export const PortfolioLink = styled(LinkRoute)``
export const PortfolioImg = styled.img`
  width: 100%;
  transition: all 7s ease;

  &:hover {
    transform: translateY(-100%);
  }
`
// export const PortBrowser = styled.div``
// export const PortBrowser = styled.div``
