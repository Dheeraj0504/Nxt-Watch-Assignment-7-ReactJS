import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 100%;
  padding: 5px;
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 0px;
  }
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const TrendingProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 25px 10px 25px 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 5px;
  margin-left: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
    max-width: 700px;
  }
`
export const TrendingTitle = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 22px;
    font-weight: 600;
  }
`
export const TrendingChannelAndViews = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const TrendingChannelName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  margin-top: 3px;
  font-weight: 500;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 400;
  }
`
export const TrendingViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  margin-top: 3px;
  margin-left: 10px;
  font-weight: 500;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    margin: 0px;
    font-size: 15px;
  }
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 10px;
  padding-right: 2px;
  font-size: 15px;
`
