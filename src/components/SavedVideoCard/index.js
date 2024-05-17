import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  SavedVideoListItem,
  SavedVideoThumbNailImage,
  SavedVideoDetails,
  SavedVideoProfileImage,
  SavedVideoContentSection,
  SavedVideoTitle,
  SavedVideoChannelAndViews,
  SavedVideoChannelName,
  SavedVideoViewsAndDate,
  SavedVideoDot,
} from './styledComponents'

const SavedVideoCard = props => {
  // console.log(props)
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#cccccc' : '#7e858e'
        const titleColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <ItemLink to={`/videos/${id}`}>
            <SavedVideoListItem>
              <SavedVideoThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <SavedVideoDetails>
                <SavedVideoProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />

                <SavedVideoContentSection>
                  <SavedVideoTitle color={titleColor}>{title}</SavedVideoTitle>
                  <SavedVideoChannelAndViews>
                    <SavedVideoChannelName color={textColor}>
                      {name}
                    </SavedVideoChannelName>
                    <SavedVideoViewsAndDate color={textColor}>
                      {viewCount} views<SavedVideoDot> &#8226; </SavedVideoDot>
                      {publishedAt}
                    </SavedVideoViewsAndDate>
                  </SavedVideoChannelAndViews>
                </SavedVideoContentSection>
              </SavedVideoDetails>
            </SavedVideoListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default SavedVideoCard
