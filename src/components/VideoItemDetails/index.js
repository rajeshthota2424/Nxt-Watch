import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BiListPlus, BiLike, BiDislike, BiListCheck} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import Header from '../Header'
import SideBar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'
import {
  VideoItemDetailsBgContainer,
  SideBarAndVideoItemDetailsContainer,
  VideoItemContainer,
  Title,
  DetailsContainer,
  ViewsLikesContainer,
  Para,
  ViewsYearContainer,
  UlContainer,
  Image,
  ChannelDescription,
  NameAndDescription,
  Name,
  FailureBgContainer,
  ImageError,
  ErrorPara,
  RetryButton,
  FailurePara,
  Button,
} from './styledComponents'
import './index.css'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    isLike: false,
    isDisLike: false,
    videoData: {},
  }

  componentDidMount() {
    this.getTheData()
  }

  responseSuccess = async response => {
    const data = await response.json()
    const updatedData = {
      name: data.video_details.channel.name,
      profileImageUrl: data.video_details.channel.profile_image_url,
      subscriberCount: data.video_details.channel.subscriber_count,
      description: data.video_details.description,
      id: data.video_details.id,
      publishedAt: data.video_details.published_at,
      thumbnailUrl: data.video_details.thumbnail_url,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      viewCount: data.video_details.view_count,
    }
    this.setState({
      videoData: {...updatedData},
      apiStatus: apiStatusList.success,
    })
  }

  renderTheLoader = isDark => {
    const dark = isDark === true ? '#ffffff' : '#4f46e5'
    return (
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color={dark} height="50" width="50" />
      </div>
    )
  }

  responseFailure = () => {
    this.setState({apiStatus: apiStatusList.failure})
  }

  getTheData = async () => {
    this.setState({apiStatus: apiStatusList.in_progress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoItemDetailsApiUrl, options)

    if (response.ok === true) {
      this.responseSuccess(response)
    } else {
      this.responseFailure()
    }
  }

  onClickLike = () => {
    const {isLike, isDisLike} = this.state
    if (isLike === true && isDisLike === false) {
      this.setState({isLike: false, isDisLike: false})
    } else if (isDisLike === true && isLike === false) {
      this.setState({isDisLike: false, isLike: true})
    } else if (isLike === false && isDisLike === false) {
      this.setState({isLike: true, isDisLike: false})
    }
  }

  onClickDisLike = () => {
    const {isLike, isDisLike} = this.state
    if (isDisLike === true && isLike === false) {
      this.setState({isDisLike: false, isLike: false})
    } else if (isDisLike === false && isLike === true) {
      this.setState({isDisLike: true, isLike: false})
    } else if (isLike === false && isDisLike === false) {
      this.setState({isDisLike: true, isLike: false})
    }
  }

  renderTheVideo = (isDark, onAddToList, savedVideosList) => {
    const {videoData, isLike, isDisLike} = this.state
    const likeH = isLike === true && 'likeH'
    const disLikeH = isDisLike === true && 'disLikeH'

    const {
      description,
      id,
      publishedAt,
      title,
      videoUrl,
      viewCount,
      profileImageUrl,
      name,
      subscriberCount,
    } = videoData

    let published = formatDistanceToNow(new Date(publishedAt)).split(' ')
    if (published.length === 3) {
      published = [published[1], published[2]]
    } else {
      published = [published[0], published[1]]
    }

    const onClickSaved = () => {
      onAddToList({...videoData})
    }

    const filteredItem = savedVideosList.filter(each => each.id === id)
    const save = filteredItem.length === 0 ? false : 2 > 1
    const saved = save === true && 'likeH'

    return (
      <VideoItemContainer>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="350px"
          className="react-player"
          controls
        />
        <DetailsContainer>
          <Title d={isDark}>{title}</Title>
          <ViewsLikesContainer>
            <ViewsYearContainer>
              <Para>{viewCount}</Para>
              <UlContainer>
                <Para>
                  {published[0]} {published[1]} ago
                </Para>
              </UlContainer>
            </ViewsYearContainer>
            <UlContainer n>
              <Button type="button" onClick={this.onClickLike}>
                <Para as="li">
                  <BiLike className={`icons ${likeH}`} />
                  <Para l={isLike}>Like</Para>
                </Para>
              </Button>
              <Button type="button" onClick={this.onClickDisLike}>
                <Para as="li">
                  <BiDislike className={`icons ${disLikeH}`} />
                  <Para dis={isDisLike}>DisLike</Para>
                </Para>
              </Button>

              <Button type="button" onClick={onClickSaved}>
                <Para as="li">
                  {save === true ? (
                    <BiListCheck className={`icons ${saved}`} />
                  ) : (
                    <BiListPlus className="icons" />
                  )}
                  <Para sa={save}>{save === true ? 'Saved' : 'Save'}</Para>
                </Para>
              </Button>
            </UlContainer>
          </ViewsLikesContainer>
          <hr width="100%" />
          <ChannelDescription>
            <Image src={profileImageUrl} alt="channel logo" />
            <NameAndDescription>
              <Name d={isDark}>{name}</Name>
              <Para>{subscriberCount} subscribers</Para>
            </NameAndDescription>
          </ChannelDescription>
          <Para>{description}</Para>
        </DetailsContainer>
      </VideoItemContainer>
    )
  }

  onClickVideoItemRetry = () => {
    this.setState({}, this.getTheData)
  }

  renderTheFailureView = isDark => {
    const image =
      isDark === true
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureBgContainer>
        <ImageError src={image} alt="failure view" />
        <ErrorPara as="h1" d={isDark}>
          Oops! Something Went Wrong
        </ErrorPara>
        <FailurePara>
          We are having some trouble to complete your request. Please try again.
        </FailurePara>
        <RetryButton type="button" onClick={this.onClickVideoItemRetry}>
          Retry
        </RetryButton>
      </FailureBgContainer>
    )
  }

  renderTheApiStatus = (isDark, onAddToList, savedVideosList) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.success:
        return this.renderTheVideo(isDark, onAddToList, savedVideosList)
      case apiStatusList.failure:
        return this.renderTheFailureView(isDark)
      case apiStatusList.in_progress:
        return this.renderTheLoader(isDark)

      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, onAddToList, savedVideosList} = value
          return (
            <VideoItemDetailsBgContainer
              d={isDark}
              data-testid="videoItemDetails"
            >
              <Header />
              <SideBarAndVideoItemDetailsContainer>
                <SideBar />
                {this.renderTheApiStatus(isDark, onAddToList, savedVideosList)}
              </SideBarAndVideoItemDetailsContainer>
            </VideoItemDetailsBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
