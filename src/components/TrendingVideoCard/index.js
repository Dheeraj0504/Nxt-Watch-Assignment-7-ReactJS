import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelAndViews,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponents'

const TrendingVideoCard = props => {
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
            <TrendingListItem>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />

                <TrendingContentSection>
                  <TrendingTitle color={titleColor}>{title}</TrendingTitle>
                  <TrendingChannelAndViews>
                    <TrendingChannelName color={textColor}>
                      {name}
                    </TrendingChannelName>
                    <TrendingViewsAndDate color={textColor}>
                      {viewCount} views<TrendingDot> &#8226; </TrendingDot>
                      {publishedAt}
                    </TrendingViewsAndDate>
                  </TrendingChannelAndViews>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default TrendingVideoCard
