import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../Sidebar'
import TrendingListItem from '../TrendingListItem'
import {
  TrendingBgContainer,
  TrendingSidebarContainer,
  TrendingUlContainer,
  FailureBgContainer,
  Image,
  ErrorPara,
  Para,
  RetryButton,
  TrendingListContainer,
  TrendingSecondContainer,
  TrendingIconContainer,
  Heading,
  IconContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {list: [], apiStatus: apiStatusList.initial}

  componentDidMount() {
    this.getTheData()
  }

  success = async response => {
    const data = await response.json()
    const updatedData = data.videos.map(each => ({
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
    }))
    console.log(updatedData)
    this.setState({list: [...updatedData], apiStatus: apiStatusList.success})
  }

  failure = () => {
    this.setState({apiStatus: apiStatusList.failure})
  }

  getTheData = async () => {
    this.setState({apiStatus: apiStatusList.in_progress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosApiUrl, options)

    if (response.ok === true) {
      this.success(response)
    } else {
      this.failure()
    }
  }

  onClickTrendingRetry = () => {
    this.setState({}, this.getTheData)
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
        <Para>
          We are having some trouble to complete your request.
          <br />
          Please try again
        </Para>
        <RetryButton type="button" onClick={this.onClickTrendingRetry}>
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

  renderTheContent = isDark => {
    const {list} = this.state
    return (
      <TrendingListContainer>
        <TrendingIconContainer d={isDark}>
          <IconContainer d={isDark}>
            <HiFire className="fire-icon" />
          </IconContainer>
          <Heading d={isDark}>Trending</Heading>
        </TrendingIconContainer>
        <TrendingUlContainer>
          {list.map(each => (
            <TrendingListItem each={each} key={each.id} />
          ))}
        </TrendingUlContainer>
      </TrendingListContainer>
    )
  }

  renderTheStatus = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderTheContent(isDark)
      case apiStatusList.failure:
        return this.renderTheFailureView()
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
            <TrendingBgContainer d={isDark} data-testid="trending">
              <Header />
              <TrendingSidebarContainer>
                <SideBar isActive="trending" />
                <TrendingSecondContainer>
                  {this.renderTheStatus(isDark)}
                </TrendingSecondContainer>
              </TrendingSidebarContainer>
            </TrendingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
