import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItem = styled.li`
  padding: 18px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    max-width: 310px;
  }
`
export const GamingThumbNailImage = styled.img`
  width: 100%;
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 8px;
`
export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.color};
  margin-bottom: 0px;
`

export const GamingViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => props.color};
  margin-top: 4px;
  font-weight: 500;
`
