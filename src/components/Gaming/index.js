import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import {
  GamingBgContainer,
  GamingSidebarContainer,
  GamingSecondContainer,
  FailureBgContainer,
  ErrorPara,
  Image,
  Para,
  RetryButton,
  GamingListContainer,
  GamingIconContainer,
  Heading,
  IconContainer,
  GamingUlContainer,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingListItem from '../GamingListItems'
import ThemeContext from '../../context/ThemeContext'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusList.initial, list: []}

  componentDidMount() {
    this.getTheData()
  }

  getTheData = async () => {
    this.setState({apiStatus: apiStatusList.in_progress})
    const jwtToken = Cookies.get('jwt_token')
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingVideosApiUrl, options)

    if (response.ok === true) {
      this.success(response)
    } else {
      this.failure()
    }
  }

  success = async response => {
    const data = await response.json()
    const updatedData = data.videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    this.setState({apiStatus: apiStatusList.success, list: [...updatedData]})
  }

  failure = () => {
    this.setState({apiStatus: apiStatusList.failure})
  }

  onClickGamingRetry = () => {
    this.getTheData()
  }

  renderTheFailureView = isDark => {
    const image =
      isDark === true
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureBgContainer>
        <Image src={image} alt="failure view" />
        <ErrorPara as="h1" d={isDark}>
          Oops! Something Went Wrong
        </ErrorPara>
        <Para>We are having some trouble</Para>
        <RetryButton type="button" onClick={this.onClickGamingRetry}>
          Retry
        </RetryButton>
      </FailureBgContainer>
    )
  }

  renderTheLoader = isDark => {
    const dark = isDark === true ? '#ffffff' : '#4f46e5'
    return (
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color={dark} height="50" width="50" />
      </div>
    )
  }

  renderTheGamingList = isDark => {
    const {list} = this.state

    return (
      <GamingListContainer data-testid="gaming">
        <GamingIconContainer d={isDark}>
          <IconContainer d={isDark}>
            <SiYoutubegaming className="fire-icon" />
          </IconContainer>
          <Heading d={isDark}>Gaming</Heading>
        </GamingIconContainer>
        <GamingUlContainer>
          {list.map(each => (
            <GamingListItem key={each.id} each={each} />
          ))}
        </GamingUlContainer>
      </GamingListContainer>
    )
  }

  renderTheApiStatus = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderTheGamingList(isDark)
      case apiStatusList.failure:
        return this.renderTheFailureView(isDark)
      case apiStatusList.in_progress:
        return this.renderTheLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingBgContainer d={isDark} data-testid="gaming">
              <Header />
              <GamingSidebarContainer>
                <Sidebar isActive="gaming" />
                <GamingSecondContainer>
                  {this.renderTheApiStatus(isDark)}
                </GamingSecondContainer>
              </GamingSidebarContainer>
            </GamingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
