import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  InputLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
  LoginButton,
  SubmitError,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    // console.log(this.props)
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()

    let {username, password} = this.state
    if (username.trim(' ') === 'Dheeraj') {
      username = 'rahul'
    }
    if (password === 'Dheeraj@2024') {
      password = 'rahul@2021'
    }
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    // console.log(data)
    // console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeHandler = event => {
    // console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          id="username"
          placeholder="Dheeraj"
          name="username"
          value={username}
          onChange={this.onChangeHandler}
        />
      </>
    )
  }

  OnShowPassword = () => {
    // console.log("Password Shown")
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type={inputType}
          id="password"
          placeholder="Dheeraj@2024"
          name="password"
          value={password}
          onChange={this.onChangeHandler}
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.OnShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {/** Using Logical && Operator */}
          {showSubmitError && (
            <SubmitError>*{errorMsg.toUpperCase()}</SubmitError>
          )}
        </FormContainer>
      </AppContainer>
    )
  }
}
export default LoginForm
