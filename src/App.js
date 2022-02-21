import About from './components/About'
import Intro from './components/intro'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PortfolioList from './components/PortfolioList'
import Contact from './components/Contact'
import Toggle from './components/Toggle'
import { useContext } from 'react'
import { ThemeContext } from './context'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#1e272e' : '#fff',
        color: darkMode && '#fff',
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Router>
        <Routes>
          <Route exact path='' element={<PortfolioList />} />
        </Routes>
      </Router>
      <Contact />
    </div>
  )
}

export default App
