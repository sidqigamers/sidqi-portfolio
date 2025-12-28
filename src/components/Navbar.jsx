import { useState, useEffect } from 'react'
import darkIcon from '../assets/dark-mode.png'
import lightIcon from '../assets/light-mode.png'

function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">Sidqi</div>

      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
          <button
              className="dark-toggle"
              onClick={toggleDarkMode}
              ria-label="Toggle Dark Mode">
                <img
                src={isDark ? lightIcon : darkIcon}
                alt="Toggle theme"
                className="dark-icon"/>
          </button>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
