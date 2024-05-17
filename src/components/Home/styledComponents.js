import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 80px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  min-height: 230px;
`

export const BannerContentsContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
export const BannerLogo = styled.img`
  width: 20%;
`
export const BannerText = styled.p`
  font-size: 20px;
  color: #1e293b;
  font-weight: 500;
  margin-bottom: 40px;
`
export const BannerButton = styled.button`
  background-color: transparent;
  padding: 8px;
  border: 1.5px solid #00306e;
  color: #00306e;
  font-weight: bold;
  outline: orange;
  cursor: pointer;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 90%;
  height: 40px;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
`
export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
`
export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  color: ${props => props.color};
  font-family: Roboto;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`
