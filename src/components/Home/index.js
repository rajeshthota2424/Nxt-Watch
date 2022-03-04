import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ListItem from '../ListItem'
import {
  HomeBgContainer,
  SliderListContainer,
  HomeContentContainer,
  PremiumContainer,
  LogoImage,
  LogoCloseContainer,
  PremiumPara,
  OutlineButton,
  InputContainer,
  Input,
  UlContainer,
  CloseButton,
  FailureBgContainer,
  Image,
  ErrorPara,
  Para,
  RetryButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    list: [],
    search: '',
    isShowPremium: true,
  }

  componentDidMount = () => {
    this.getTheData()
  }

  getTheData = async () => {
    this.setState({apiStatus: apiStatusList.in_progress})
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeVideoApiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideoApiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        videoCount: each.view_count,
      }))
      this.setState({apiStatus: apiStatusList.success, list: [...updatedData]})
    } else {
      this.setState({apiStatus: apiStatusList.failure})
    }
  }

  renderTheList = () => {
    const {list} = this.state
    return (
      <UlContainer>
        {list.map(each => (
          <ListItem each={each} key={each.id} />
        ))}
      </UlContainer>
    )
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onClickSearchButton = () => {
    this.setState(prevState => ({search: prevState.search}), this.getTheData)
  }

  renderTheSearchContainer = isDark => {
    const {search} = this.state
    const dark = isDark === true && 'darkColor'
    return (
      <InputContainer d={isDark}>
        <Input
          type="search"
          placeholder="search"
          value={search}
          onChange={this.onChangeSearch}
        />
        <button
          type="button"
          className="search-button"
          onClick={this.onClickSearchButton}
          data-testid="searchButton"
        >
          <AiOutlineSearch className={`search-icon ${dark}`} />
        </button>
      </InputContainer>
    )
  }

  onClickCloseButton = () => {
    this.setState({isShowPremium: false})
  }

  onClickFailurRetry = () => {
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
        <RetryButton type="button" onClick={this.onClickFailurRetry}>
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

  onClickRetryButton = () => {
    this.getTheData()
  }

  renderTheNoList = isDark => (
    <FailureBgContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <ErrorPara as="h1" d={isDark}>
        No Search results found
      </ErrorPara>
      <Para>Try different key words or remove search filter</Para>
      <RetryButton onClick={this.onClickRetryButton}>Retry</RetryButton>
    </FailureBgContainer>
  )

  renderTheStatus = isDark => {
    const {apiStatus, list} = this.state
    const listLength = list.length
    switch (apiStatus) {
      case apiStatusList.in_progress:
        return this.renderTheLoader(isDark)
      case apiStatusList.success:
        if (listLength > 0) {
          return this.renderTheList()
        }
        return this.renderTheNoList(isDark)
      case apiStatusList.failure:
        return this.renderTheFailureView(isDark)

      default:
        return null
    }
  }

  renderTheContent = isDark => {
    const {isShowPremium} = this.state
    return (
      <HomeContentContainer d={isDark}>
        <PremiumContainer show={isShowPremium} data-testid="banner">
          <LogoCloseContainer>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <CloseButton
              type="button"
              onClick={this.onClickCloseButton}
              data-testid="close"
            >
              <AiOutlineClose />
            </CloseButton>
          </LogoCloseContainer>
          <PremiumPara>
            Buy Nxt Watch premium prepaid plans with UPI
          </PremiumPara>
          <OutlineButton>GET IT NOW</OutlineButton>
        </PremiumContainer>
        {this.renderTheSearchContainer(isDark)}
        {this.renderTheStatus(isDark)}
      </HomeContentContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeBgContainer isDark={isDark} data-testid="home">
              <Header />
              <SliderListContainer>
                <Sidebar isActive="home" />
                {this.renderTheContent(isDark)}
              </SliderListContainer>
            </HomeBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
