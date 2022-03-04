import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {
  SidebarBgContainer,
  UnorderList,
  ListItem,
  Para,
  ContactPara,
  ImagesContainer,
  Image,
  ContactContainer,
} from './styledComponents'
import './index.css'

const Sidebar = props => {
  const {isActive} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const darkIcon = isDark === true && 'icons-color'
        const iconH = isActive === 'home' && 'homeH'
        const iconT = isActive === 'trending' && 'trendingT'
        const iconG = isActive === 'gaming' && 'gamingG'
        const iconS = isActive === 'saved_video' && 'save_videoS'
        return (
          <SidebarBgContainer d={isDark}>
            <UnorderList>
              <Link to="/" className="link">
                <ListItem a={isActive === 'home'} d={isDark}>
                  <AiFillHome className={`home-icon ${darkIcon} ${iconH}`} />
                  <Para d={isDark} a={isActive === 'home'}>
                    Home
                  </Para>
                </ListItem>
              </Link>
              <Link to="/trending" className="link">
                <ListItem a={isActive === 'trending'} d={isDark}>
                  <ImFire className={`home-icon ${darkIcon} ${iconT}`} />
                  <Para d={isDark} a={isActive === 'trending'}>
                    Trending
                  </Para>
                </ListItem>
              </Link>
              <Link to="/gaming" className="link">
                <ListItem a={isActive === 'gaming'} d={isDark}>
                  <SiYoutubegaming
                    className={`home-icon ${darkIcon} ${iconG}`}
                  />
                  <Para d={isDark} a={isActive === 'gaming'}>
                    Gaming
                  </Para>
                </ListItem>
              </Link>
              <Link to="/saved-videos" className="link">
                <ListItem a={isActive === 'saved_video'} d={isDark}>
                  <BiListPlus className={`home-icon ${darkIcon} ${iconS}`} />
                  <Para d={isDark} a={isActive === 'saved_videos'}>
                    Saved videos
                  </Para>
                </ListItem>
              </Link>
            </UnorderList>
            <ContactContainer>
              <ContactPara d={isDark}>Contact Us</ContactPara>
              <ImagesContainer>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ImagesContainer>
              <Para d={isDark}>
                Enjoy! Now to see your channels and recommendations! in the
                sidebar
              </Para>
            </ContactContainer>
          </SidebarBgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Sidebar
