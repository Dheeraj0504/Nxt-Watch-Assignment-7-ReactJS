import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  margin-top: 30px;
`

export const FailedImage = styled.img`
  width: 180px;
  @media screen and (min-width: 768px) {
    width: 420px;
  }
`
export const FailedHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const FailedNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
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
