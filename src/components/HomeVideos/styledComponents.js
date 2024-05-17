import styled from 'styled-components'

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  padding-bottom: 100px;
`

export const NoVideosImage = styled.img`
  width: 180px;
  @media screen and (min-width: 768px) {
    width: 420px;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
`

export const NoVideosNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 6px;
  color: #ffffff;
  height: 40px;
  width: 120px;
  font-family: Roboto;
  font-size: 16px;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`
