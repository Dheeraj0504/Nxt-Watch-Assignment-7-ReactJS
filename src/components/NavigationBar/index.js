import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavBar,
  NavigationDesktopContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactImage,
  ContactNote,
  NavigationMobileViewContainer,
} from './styledComponents'

const NavigationBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value

      const bgColor = isDarkTheme ? '#424242' : '#f8fafc'
      const activeTabBgColor = isDarkTheme ? '#383838' : '#909090'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      const onClickTabHome = () => {
        // console.log('Home Btn Clicked')
        changeTab('Home')
      }

      const onClickTabTrending = () => {
        changeTab('Trending')
      }

      const onClickTabGaming = () => {
        changeTab('Gaming')
      }

      const onClickTabSaveVideos = () => {
        changeTab('SaveVideos')
      }

      return (
        <NavBar>
          <NavigationDesktopContainer bgColor={bgColor}>
            <NavOptions>
              <NavLink to="/">
                <NavLinkContainer
                  key="home"
                  bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
                  onClick={onClickTabHome}
                >
                  <AiFillHome
                    size={20}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Home</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/trending">
                <NavLinkContainer
                  key="trending"
                  bgColor={activeTab === 'Trending' ? activeTabBgColor : 'none'}
                  onClick={onClickTabTrending}
                >
                  <HiFire
                    size={20}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Trending</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/gaming">
                <NavLinkContainer
                  key="gaming"
                  bgColor={activeTab === 'Gaming' ? activeTabBgColor : 'none'}
                  onClick={onClickTabGaming}
                >
                  <SiYoutubegaming
                    size={20}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Gaming</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/saved-videos">
                <NavLinkContainer
                  key="saveVideos"
                  bgColor={
                    activeTab === 'SaveVideos' ? activeTabBgColor : 'none'
                  }
                  onClick={onClickTabSaveVideos}
                >
                  <CgPlayListAdd
                    size={20}
                    color={activeTab === 'SaveVideos' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Saved Videos</NavText>
                </NavLinkContainer>
              </NavLink>
            </NavOptions>
            <ContactInfo>
              <ContactHeading color={textColor}>CONTACT US</ContactHeading>
              <ContactIcons>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIcons>
              <ContactNote color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ContactNote>
            </ContactInfo>
          </NavigationDesktopContainer>
          <NavigationMobileViewContainer bgColor={bgColor}>
            <NavLink to="/">
              <AiFillHome
                size={30}
                onClick={onClickTabHome}
                color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/trending">
              <HiFire
                size={30}
                onClick={onClickTabTrending}
                color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/gaming">
              <SiYoutubegaming
                size={30}
                onClick={onClickTabGaming}
                color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/saved-videos">
              <CgPlayListAdd
                size={30}
                onClick={onClickTabSaveVideos}
                color={activeTab === 'SaveVideos' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
          </NavigationMobileViewContainer>
        </NavBar>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default NavigationBar
