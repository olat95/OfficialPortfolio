import About from './components/About'
import Intro from './components/intro'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PortfolioList from './components/PortfolioList'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Intro />
      <About />
      <Router>
        <Routes>
          <Route path='/' element={<PortfolioList />} />
        </Routes>
      </Router>
      <Contact />
    </>
  )
}

export default App
