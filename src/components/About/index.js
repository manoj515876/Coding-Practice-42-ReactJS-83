import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <div className="container">
            <Navbar />
            {isDarkTheme ? (
              <div className="box home-dark">
                <div className="card">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                    alt="about"
                    className="card-img"
                  />
                  <h1 className="head-dark">About</h1>
                </div>
              </div>
            ) : (
              <div className="box">
                <div className="card">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                    alt="about"
                    className="card-img"
                  />
                  <h1 className="heading">About</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
