import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 5px;
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-right: 8px;
    margin-bottom: 20px;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  padding-top: 0px;
  @media screen and (min-width: 768px) {
    padding: 2px;
  }
`
export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin-top: 15px;
  margin-right: 15px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0px;
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => props.color};
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const ChannelAndViewsContainer = styled.div`
  display: flex;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    font-weight: 500;
  }
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
  margin-right: 10px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-top: 8px;
  }
`
export const ViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
  font-weight: 500;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  font-weight: 500;
  font-size: 13px;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
