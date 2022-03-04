import {Component} from 'react'
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'
import ThemeContext from './context/ThemeContext'

const routeList = {
  home: 'HOME',
  gaming: 'GAMING',
  trending: 'TRENDING',
  saved_videos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {
    isDark: false,
    activeRoute: routeList.home,
    savedVideosList: [],
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onAddToList = videoDetails => {
    const {savedVideosList} = this.state
    const {id} = videoDetails
    if (savedVideosList.length === 0) {
      this.setState({savedVideosList: [{...videoDetails}]})
    } else {
      const filteredList = savedVideosList.filter(each => each.id !== id)
      if (filteredList.length === savedVideosList.length) {
        this.setState(prevState => ({
          savedVideosList: [...prevState.savedVideosList, videoDetails],
        }))
      } else {
        this.setState({savedVideosList: [...filteredList]})
      }
    }
  }

  render() {
    const {isDark, activeRoute, savedVideosList} = this.state
    console.log(activeRoute)
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          savedVideosList,
          onChangeTheme: this.onChangeTheme,
          onAddToList: this.onAddToList,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route exact path="/bad-path" component={NotFound} />
            <Redirect to="/bad-path" />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}

export default App
