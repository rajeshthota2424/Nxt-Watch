import {Link} from 'react-router-dom'
import {
  ThumbnailImg,
  GamingListItemContainer,
  LiTitle,
  Para,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const GamingListItem = props => {
  const {each} = props
  const {id, title, thumbnailUrl, viewCount} = each

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <GamingListItemContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <LiTitle d={isDark}>{title}</LiTitle>
              <Para>{viewCount} watching worldwide</Para>
            </GamingListItemContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingListItem
