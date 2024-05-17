import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import PlayVideoView from '../PlayVideoView'
import FailureView from '../FailureView'

import {VideoDetailViewContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailView extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    // console.log(data)
    // console.log(response)
    if (response.ok === true) {
      const fetchedData = data.video_details
      const updatedData = {
        id: fetchedData.id,
        title: fetchedData.title,
        videoUrl: fetchedData.video_url,
        thumbnailUrl: fetchedData.thumbnail_url,
        viewCount: fetchedData.view_count,
        publishedAt: fetchedData.published_at,
        description: fetchedData.description,
        name: fetchedData.channel.name,
        profileImageUrl: fetchedData.channel.profile_image_url,
        subscriberCount: fetchedData.channel.subscriber_count,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
      />
    )
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideoDetailView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderPlayVideoView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    // const {videoDetails} = this.state
    // console.log(videoDetails)
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'

          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailViewContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideoDetailView()}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default VideoDetailView
