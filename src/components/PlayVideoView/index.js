import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  VideoPlayerDetails,
  PlayVideoTitle,
  PlayVideoStatusContainer,
  PlayVideoStatus,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  BtnContainer,
  SocialButton,
  HrLine,
  ChannelContainer,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'

const PlayVideoview = props => {
  // console.log(props)
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const onClickLikeBtn = () => {
    // console.log('Like Btn Clicked')
    clickLiked()
  }

  const onClickDislikeBtn = () => {
    // console.log('Dislike Btn Clicked')
    clickDisLiked()
  }

  const {
    description,
    id,
    name,
    profileImageUrl,
    publishedAt,
    subscriberCount,
    // thumbnailUrl,
    title,
    videoUrl,
    viewCount,
  } = videoDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos, addOrRemoveSavedVideo} = value

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        const likeIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'

        const savedListIds = savedVideos.map(eachVideo => eachVideo.id)
        const saveButtonText = savedListIds.includes(id) ? 'Saved' : 'Save'
        const saveIconColor = saveButtonText === 'Saved' ? '#2563eb' : '#64748b'

        const onClickSaveOrUnsave = () => {
          // console.log('Save Btn Clicked')
          addOrRemoveSavedVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoUrl} width="100%" />
            <VideoPlayerDetails bgColor={bgColor}>
              <PlayVideoTitle color={textColor}>{title}</PlayVideoTitle>
              <PlayVideoStatusContainer>
                <PlayVideoStatus color={textColor}>
                  {viewCount} views <PlayVideoDot> &#8226; </PlayVideoDot>
                  {publishedAt}
                </PlayVideoStatus>
                <PlaySocialButtonsContainer>
                  <BtnContainer>
                    <SocialButton
                      type="button"
                      onClick={onClickLikeBtn}
                      color={likeIconColor}
                    >
                      <AiOutlineLike size={22} /> Like
                    </SocialButton>
                  </BtnContainer>
                  <BtnContainer>
                    <SocialButton
                      type="button"
                      onClick={onClickDislikeBtn}
                      color={dislikeIconColor}
                    >
                      <AiOutlineDislike size={22} /> Dislike
                    </SocialButton>
                  </BtnContainer>
                  <BtnContainer>
                    <SocialButton
                      type="button"
                      color={saveIconColor}
                      onClick={onClickSaveOrUnsave}
                      value={savedListIds.includes(id)}
                    >
                      <BiListPlus size={30} /> {saveButtonText}
                    </SocialButton>
                  </BtnContainer>
                </PlaySocialButtonsContainer>
              </PlayVideoStatusContainer>
              <HrLine />
              <ChannelContainer>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
                <ChannelInfo>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ChannelSubscribers color={textColor}>
                    {subscriberCount} Subscribers
                  </ChannelSubscribers>
                </ChannelInfo>
              </ChannelContainer>
              <ChannelDescription color={textColor}>
                {description}
              </ChannelDescription>
            </VideoPlayerDetails>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default PlayVideoview
