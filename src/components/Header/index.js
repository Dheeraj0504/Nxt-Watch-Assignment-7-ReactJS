import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {IoMenu} from 'react-icons/io5'

import Popup from 'reactjs-popup'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavbarHeader,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  NavMenu,
  LogoutButton,
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  LogoutIconButton,
  LogoLink,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const color = isDarkTheme ? '#ffffff' : '#4f46e5'
      const bgColor = isDarkTheme ? '#424242' : '#f8fafc'
      const mobileViewColor = isDarkTheme ? '#ffffff' : '#000000'

      const logoutConfirmBgColor = isDarkTheme ? '#231f20' : '#f9f9f9'

      // console.log(props)
      const {history} = props
      const onClickLogout = () => {
        // console.log("logout button clicked")
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeTheme = () => {
        // console.log("Theme Button Clicked")
        toggleTheme()
      }

      return (
        <NavbarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ActionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <NavMenu>
              <IoMenu size={30} color={mobileViewColor} />
            </NavMenu>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" border-color={color} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer bgColor={logoutConfirmBgColor}>
                  <ModalDesc color={mobileViewColor}>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={25} color={mobileViewColor} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer bgColor={logoutConfirmBgColor}>
                  <ModalDesc color={mobileViewColor}>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavbarHeader>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default withRouter(Header)
