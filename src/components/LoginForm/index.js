import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isShowPassword: false, error: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  onSubmitClicked = event => {
    event.preventDefault()
    this.getTheData()
  }

  loginSuccess = async response => {
    const data = await response.json()
    const jwtToken = data.jwt_token
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/login')
  }

  loginFailure = async response => {
    const data = await response.json()
    this.setState({error: data.error_msg})
  }

  getTheData = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)

    if (response.ok === true) {
      this.loginSuccess(response)
    } else {
      this.loginFailure(response)
    }
  }

  render() {
    const {username, password, isShowPassword, error} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgContainer = isDark && 'login-bg-dark'
          const formContainer = isDark && 'form-bg-dark'
          const labelDark = isDark && 'label-light'
          const inputDark = isDark && 'input-dark'
          const logo =
            isDark === true
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <div className={`login-bg-container ${bgContainer}`}>
              <form
                className={`login-form-container ${formContainer}`}
                onSubmit={this.onSubmitClicked}
              >
                <img src={logo} alt="website logo" className="login-logo" />
                <div className="username-input">
                  <label className={`label ${labelDark}`} htmlFor="username">
                    USERNAME
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className={`input ${inputDark}`}
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                </div>
                <div className="username-input">
                  <label className={`label ${labelDark}`} htmlFor="password">
                    PASSWORD
                  </label>
                  <input
                    id="password"
                    type={isShowPassword === true ? 'text' : 'password'}
                    placeholder="Password"
                    className={`input ${inputDark}`}
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </div>
                <div className="checkbox-label">
                  <input
                    type="checkbox"
                    id="showPassword"
                    className="checkbox"
                    onChange={this.onChangeShowPassword}
                  />
                  <label htmlFor="showPassword" className={`show ${labelDark}`}>
                    Show Password
                  </label>
                </div>
                <button type="submit" className="login-button">
                  Login
                </button>
                <div className="error-container">
                  {error !== '' ? <p className="error">*{error}</p> : null}
                </div>
              </form>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
