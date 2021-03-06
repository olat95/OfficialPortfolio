import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  ${mobile({ padding: '50px' })}
`
export const PortListText = styled.div`
  width: 65%;

  ${mobile({ width: '100%' })}
`
export const PortListTitle = styled.h1`
  font-size: 50px;
  font-weight: 600;
`
export const PortListDesc = styled.p`
  margin: 20px 0;

  ${mobile({ display: 'none' })}
`
export const PortList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
