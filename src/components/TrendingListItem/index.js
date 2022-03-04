import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const TrendingListItem = props => {
  const {each} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = each

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const white = isDark === true && 'trending-white-title'
        return (
          <Link to={`videos/${id}`} className="link">
            <li className="trending-li-container">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="trending-thumbnail-img"
              />
              <div className="trending-profile-details-container">
                <img
                  src={profileImageUrl}
                  alt="profile-img"
                  className="profile-image"
                />
                <div className="title-name-viewCount-container">
                  <p className={`trending-title ${white}`}>{title}</p>
                  <div className="channel-name-views-container">
                    <p className="desc">{name}</p>
                    <div className="views-published-container">
                      <p className="desc">{viewCount} views</p>
                      <ul className="ul-publishedAt">
                        <p className="desc">{publishedAt}</p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingListItem
