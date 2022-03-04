import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  SavedVideosBgContainer,
  SavedVideosSidebarContainer,
  SavedVideosSecondContainer,
  TrendingIconContainer,
  TrendingListContainer,
  IconContainer,
  Heading,
  TrendingUlContainer,
  NoSavedList,
  NoSavedImage,
  NoSavedHeading,
  NoSavedPara,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import TrendingListItem from '../TrendingListItem'

const SavedVideos = () => {
  const renderTheContent = (isDark, savedVideosList) => (
    <TrendingListContainer>
      <TrendingIconContainer d={isDark}>
        <IconContainer d={isDark}>
          <HiFire className="fire-icon" />
        </IconContainer>
        <Heading d={isDark}>Saved Videos</Heading>
      </TrendingIconContainer>
      <TrendingUlContainer as="ul">
        {savedVideosList.map(each => (
          <TrendingListItem each={each} key={each.id} />
        ))}
      </TrendingUlContainer>
    </TrendingListContainer>
  )

  const renderTheNoSavedList = isDark => (
    <NoSavedList>
      <NoSavedImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedHeading d={isDark}>No Saved videos found</NoSavedHeading>
      <NoSavedPara d={isDark}>
        You can save your videos while watching them
      </NoSavedPara>
    </NoSavedList>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value
        console.log(savedVideosList)
        return (
          <SavedVideosBgContainer d={isDark} data-testid="savedVideos">
            <Header />
            <SavedVideosSidebarContainer>
              <Sidebar isActive="saved_video" />
              <SavedVideosSecondContainer>
                {savedVideosList.length === 0
                  ? renderTheNoSavedList(isDark)
                  : renderTheContent(isDark, savedVideosList)}
              </SavedVideosSecondContainer>
            </SavedVideosSidebarContainer>
          </SavedVideosBgContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
