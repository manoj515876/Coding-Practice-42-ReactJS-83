import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const OnClickButton = () => {
            toggleTheme()
          }
          return (
            <div>
              {isDarkTheme ? (
                <div className="nav-container dark">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                    alt="website logo"
                    className="navbar-img"
                  />
                  <ul className="list-container">
                    <li>
                      <Link className="list-item light" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="list-item light" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                  <button
                    className="theme-button"
                    type="button"
                    onClick={OnClickButton}
                    data-testid="theme"
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                      alt="theme"
                      className="navbar-img"
                    />
                  </button>
                </div>
              ) : (
                <div className="nav-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                    alt="website logo"
                    className="navbar-img"
                  />
                  <ul className="list-container">
                    <li>
                      <Link className="list-item" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="list-item" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                  <button
                    className="theme-button"
                    type="button"
                    onClick={OnClickButton}
                    data-testid="theme"
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                      alt="theme"
                      className="navbar-img"
                    />
                  </button>
                </div>
              )}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
