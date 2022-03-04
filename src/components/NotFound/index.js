import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const dark = isDark === true && 'dark'
      const text = isDark === true && 'white'
      const imgUrl =
        isDark === true
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <div className={`not-found-bg-container ${dark}`}>
          <Header />
          <div className="not-found-second-container">
            <Sidebar />
            <div className="not-found-container">
              <img src={imgUrl} alt="not found" className="not-found-image" />
              <h1 className={`not-found-heading ${text}`}>Page Not Found</h1>
              <p className="not-found-para">
                we are sorry, the page you requested could not be found.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
