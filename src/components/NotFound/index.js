import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <div className="not-container">
            <Navbar />
            {isDarkTheme ? (
              <div className="not-box home-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-img"
                />
                <h1 className="not-head light">Lost your way ?</h1>
                <p className="para">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            ) : (
              <div className="not-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-img"
                />
                <h1 className="not-head">Lost your way ?</h1>
                <p className="para">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
