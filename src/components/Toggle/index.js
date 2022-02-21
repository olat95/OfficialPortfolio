import React, { useContext } from 'react'
import sun from '../../images/sun.png'
import moon from '../../images/moon.jpg'
import { Container, ToggleButton, ToggleImg } from './ToggleElement'
import { ThemeContext } from '../../context'

const Toggle = () => {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' })
  }

  return (
    <Container>
      <ToggleImg src={sun} alt='' />
      <ToggleImg src={moon} alt='' />
      <ToggleButton
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></ToggleButton>
    </Container>
  )
}

export default Toggle
