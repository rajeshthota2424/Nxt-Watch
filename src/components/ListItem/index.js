import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const ListItem = props => {
  const {each} = props
  const {id, channel, publishedAt, thumbnailUrl, title, videoCount} = each
  const {profileImageUrl, name} = channel
  let published = formatDistanceToNow(new Date(publishedAt)).split(' ')
  if (published.length === 3) {
    published = [published[1], published[2]]
  } else {
    published = [published[0], published[1]]
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const whiteColor = isDark === true && 'white'
        return (
          <Link to={`/videos/${id}`} className="link">
            <li className="li-container">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-img"
              />
              <div className="profile-details-container">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="profile-img-url"
                />
                <div className="details-container">
                  <p className={`title ${whiteColor}`}>{title}</p>
                  <div className="name-details-container">
                    <p className="li-count">{name}</p>
                    <ul className="videoCount-publish">
                      <p className="li-count">{videoCount}</p>
                      <p className="li-count">
                        {published[0]} {published[1]} ago
                      </p>
                    </ul>
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

export default ListItem
