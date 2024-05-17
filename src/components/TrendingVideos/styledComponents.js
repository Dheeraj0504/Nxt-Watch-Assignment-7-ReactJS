import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 80px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const TrendingVideoTitle = styled.div`
  background-color: ${props => props.bgColor};
  padding: 30px;
  display: flex;
  align-items: center;
`
export const TitleIconContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin-left: 30px;
  padding: 20px;
  border-radius: 50%;
`
export const TrendingText = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  margin-left: 20px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
