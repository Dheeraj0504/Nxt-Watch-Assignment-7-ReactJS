import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {GrFormClose} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'

import {
  HomeContainer,
  BannerContainer,
  BannerContentsContainer,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    showBanner: true,
    homeVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    // console.log(response)
    if (response.ok === true) {
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderVideosView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    /** Using Switch Case */
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, showBanner} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f1f5f9'
          // const display = bannerDisplay === 'flex' ? 'flex' : 'none'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          const onCloseBanner = () => {
            // console.log("close btn clicked")
            this.setState({showBanner: false})
          }

          const onChangeSearchInput = event => {
            // console.log(event.target.value)
            this.setState({searchInput: event.target.value})
          }

          const onEnterSearchInput = event => {
            if (event.key === 'Enter') {
              this.getVideos()
            }
          }

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                {showBanner && (
                  <BannerContainer data-testid="banner">
                    <BannerContentsContainer>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContentsContainer>
                    <div>
                      <BannerCloseButton
                        type="button"
                        data-testid="close"
                        onClick={onCloseBanner}
                      >
                        <GrFormClose />
                      </BannerCloseButton>
                    </div>
                  </BannerContainer>
                )}
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    color={textColor}
                    onChange={onChangeSearchInput}
                    onKeyDown={onEnterSearchInput}
                  />
                  <SearchButton
                    type="button"
                    onClick={this.getVideos}
                    data-testid="searchButton"
                  >
                    <BsSearch size={20} />
                  </SearchButton>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Home
