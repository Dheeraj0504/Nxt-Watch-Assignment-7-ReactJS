import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 80px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const GamingVideoTitle = styled.div`
  background-color: ${props => props.bgColor};
  padding: 30px;
  display: flex;
  align-items: center;
`
export const GamingTitleIconContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin-left: 30px;
  padding: 20px;
  border-radius: 50%;
`
export const GamingText = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  margin-left: 20px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
