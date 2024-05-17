import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 400px;
  margin: 15px;
`

export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 35px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const InputLabel = styled.label`
  color: #475569;
  font-size: 12px;
  font-family: Roboto;
  fonrt-weight: 500;
`
export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 18px;
  height: 40px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 10px;
`
export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  margin-bottom: 10px;
`
