import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

import {
  HeaderBgContainer,
  LogoutThemeMenuContainer,
  LogoutButton,
  PopupBgContainer,
  PopupHeading,
  CancelButton,
  ConformButton,
  ButtonContainer,
  Button,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, onChangeTheme} = value
      const onClickSun = () => {
        onChangeTheme()
      }
      const onClickMoon = () => {
        onChangeTheme()
      }
      const onClickConfirm = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      const profileImageUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
      const logoUrl =
        isDark === true
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const iconsDark = isDark === true ? 'white' : 'black'
      return (
        <HeaderBgContainer d={isDark}>
          <Link to="/">
            <img src={logoUrl} alt="website logo" className="logo" />
          </Link>

          <LogoutThemeMenuContainer>
            {isDark === true ? (
              <Button type="button" onClick={onClickSun} data-testid="theme">
                <FiSun className="sun-icon" />
              </Button>
            ) : (
              <Button type="button" onClick={onClickMoon} data-testid="theme">
                <FaMoon className="moon-icon" />
              </Button>
            )}
            <GiHamburgerMenu className={`icon ${iconsDark}`} />
            <Popup modal trigger={<FiLogOut className={`icon ${iconsDark}`} />}>
              {close => (
                <PopupBgContainer d={isDark}>
                  <PopupHeading d={isDark}>
                    Are you sure, you want to logout
                  </PopupHeading>
                  <ButtonContainer>
                    <CancelButton onClick={close}>Cancel</CancelButton>
                    <ConformButton onClick={onClickConfirm}>
                      Confirm
                    </ConformButton>
                  </ButtonContainer>
                </PopupBgContainer>
              )}
            </Popup>

            <img src={profileImageUrl} alt="profile" className="profile-img" />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" d={isDark}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <PopupBgContainer d={isDark}>
                  <PopupHeading d={isDark}>
                    Are you sure, you want to logout
                  </PopupHeading>
                  <ButtonContainer>
                    <CancelButton onClick={close}>Cancel</CancelButton>
                    <ConformButton onClick={onClickConfirm}>
                      Confirm
                    </ConformButton>
                  </ButtonContainer>
                </PopupBgContainer>
              )}
            </Popup>
          </LogoutThemeMenuContainer>
        </HeaderBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
