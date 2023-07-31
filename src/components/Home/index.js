import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
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
                    src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                    alt="home"
                    className="card-img"
                  />
                  <h1 className="head-dark">Home</h1>
                </div>
              </div>
            ) : (
              <div className="box">
                <div className="card">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                    alt="home"
                    className="card-img"
                  />
                  <h1 className="heading">Home</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
