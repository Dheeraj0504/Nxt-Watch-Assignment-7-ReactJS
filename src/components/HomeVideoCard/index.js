import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoLink,
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelAndViewsContainer,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

const HomeVideoCard = props => {
  //   console.log(props)
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <VideoLink to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelAndViewsContainer>
                    <ChannelName color={textColor}>{name}</ChannelName>
                    <ViewsAndDate color={textColor}>
                      {viewCount} views<Dot> &#8226; </Dot>
                      {publishedAt}
                    </ViewsAndDate>
                  </ChannelAndViewsContainer>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </VideoLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
